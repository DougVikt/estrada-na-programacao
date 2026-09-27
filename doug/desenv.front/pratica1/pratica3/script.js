/* script.js — regras de negócio + validações + binds reexecutáveis.
   Top-level não executa DOM: só exports. Rebind via initForm/initMask. */

import { routes } from './router.js';
import { renderContent } from './router.js';
import { buscarDados, salvarDadosLocal } from './storege.js';
import { criarCardProjeto, criarCardVoluntario } from './template.js';

export const projetosDados = [
  {
    titulo: 'Alfabetização Digital',
    descricao: 'Inclusão digital e tecnológica para a terceira idade.',
    categoria: 'Educação',
    status: 'Urgente'
  },
  {
    titulo: 'Reflorestar Natal',
    descricao: 'Plantio de mudas nativas e recuperação de áreas verdes.',
    categoria: 'Meio Ambiente',
    status: 'Meta Atingida'
  }
];

export function renderizarProjetos(lista) {
  const container = document.getElementById('projetos-container');
  if (!container) return false;
  const dados = Array.isArray(lista) && lista.length ? lista : projetosDados;
  container.innerHTML = dados.map(criarCardProjeto).join('');
  return true;
}

export function renderizarCardsDeVoluntarios(lista) {
  const container = document.getElementById('projetos-container');
  if (!container) return false;
  if (!Array.isArray(lista) || !lista.length) return false;
  container.innerHTML += lista.map(criarCardVoluntario).join('');
  return true;
}

export { routes, renderContent };

/* ---------- Validações ---------- */

export function sanitizarTexto(value, max = 120) {
  return String(value ?? '').trim().replace(/\s+/g, ' ').slice(0, max);
}

export function validarCPF(cpf) {
  const digitos = String(cpf ?? '').replace(/\D/g, '');
  if (digitos.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(digitos)) return false; // 111.111.111-11 etc.
  let soma = 0;
  for (let i = 0; i < 9; i++) soma += Number(digitos[i]) * (10 - i);
  let d1 = (soma * 10) % 11;
  if (d1 === 10) d1 = 0;
  if (d1 !== Number(digitos[9])) return false;
  soma = 0;
  for (let i = 0; i < 10; i++) soma += Number(digitos[i]) * (11 - i);
  let d2 = (soma * 10) % 11;
  if (d2 === 10) d2 = 0;
  return d2 === Number(digitos[10]);
}

export function validarNascimento(valor) {
  if (!valor) return { ok: false, motivo: 'Data de nascimento obrigatória.' };
  const data = new Date(valor + 'T12:00:00');
  if (Number.isNaN(data.getTime())) return { ok: false, motivo: 'Data inválida.' };
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  if (data > hoje) return { ok: false, motivo: 'Data não pode ser futura.' };
  const idade = (hoje - data) / (365.25 * 24 * 3600 * 1000);
  if (idade > 120) return { ok: false, motivo: 'Data irreal (idade > 120 anos).' };
  return { ok: true, idade: Math.floor(idade) };
}

export function validarEmail(valor) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(valor ?? '').trim());
}

/* ---------- Máscaras ---------- */

export function initMask() {
  const cpfElement = document.getElementById('cpf');
  if (!cpfElement) return false;
  const IMaskGlobal = window.IMask;
  if (!IMaskGlobal) {
    console.warn('[spa] IMask indisponível (offline/CDN bloqueado). Validação por pattern continua ativa.');
    return false;
  }
  try {
    if (!cpfElement.dataset.maskBound) {
      IMaskGlobal(cpfElement, { mask: '000.000.000-00' });
      cpfElement.dataset.maskBound = '1';
    }
    const cepElement = document.getElementById('cep');
    if (cepElement && !cepElement.dataset.maskBound) {
      IMaskGlobal(cepElement, { mask: '00000-000' });
      cepElement.dataset.maskBound = '1';
    }
    const telElement = document.getElementById('telefone');
    if (telElement && !telElement.dataset.maskBound) {
      IMaskGlobal(telElement, { mask: '(00) 00000-0000' });
      telElement.dataset.maskBound = '1';
    }
    return true;
  } catch (e) {
    console.error('[script] Falha ao aplicar máscara:', e);
    return false;
  }
}

/* ---------- Storage restore ---------- */

export function restaurarVoluntarios() {
  const listaSalva = buscarDados('ong_voluntarios');
  if (listaSalva && listaSalva.length) {
    renderizarCardsDeVoluntarios(listaSalva);
  }
}

/* ---------- Feedback inline ---------- */

function garantirFeedback(form) {
  let box = form.querySelector('[data-feedback]');
  if (!box) {
    box = document.createElement('p');
    box.setAttribute('data-feedback', '1');
    box.className = 'form-feedback';
    box.setAttribute('role', 'status');
    form.prepend(box);
  }
  return box;
}

function mostrarFeedback(form, msg, tipo) {
  const box = garantirFeedback(form);
  box.textContent = msg;
  box.dataset.tipo = tipo;
}

/* ---------- Formulário (rebind seguro) ---------- */

export function initForm() {
  const form = document.getElementById('form-cadastro') || document.getElementById('spa-form');
  if (!form) return false;
  if (form.dataset.bound === '1') return true;
  form.dataset.bound = '1';

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    mostrarFeedback(form, '', 'info');

    if (!form.checkValidity()) {
      form.reportValidity();
      mostrarFeedback(form, 'Verifique os campos destacados.', 'erro');
      return;
    }

    const get = (id) => document.getElementById(id)?.value ?? '';
    const nome = sanitizarTexto(get('nome'), 120);
    const email = String(get('email') ?? '').trim();
    const cpf = String(get('cpf') ?? '').trim();
    const nascimento = String(get('nascimento') ?? '').trim();

    if (nome.length < 3) {
      mostrarFeedback(form, 'Nome deve ter ao menos 3 caracteres.', 'erro');
      document.getElementById('nome')?.focus();
      return;
    }
    if (document.getElementById('email') && !validarEmail(email)) {
      mostrarFeedback(form, 'E-mail em formato inválido.', 'erro');
      document.getElementById('email')?.focus();
      return;
    }
    const cpfEl = document.getElementById('cpf');
    if (cpfEl && !validarCPF(cpf)) {
      cpfEl.setCustomValidity('CPF inválido (dígitos verificadores).');
      cpfEl.reportValidity();
      mostrarFeedback(form, 'CPF inválido: confira os 11 dígitos.', 'erro');
      cpfEl.addEventListener('input', () => cpfEl.setCustomValidity(''), { once: true });
      return;
    } else if (cpfEl) {
      cpfEl.setCustomValidity('');
    }
    const nascEl = document.getElementById('nascimento');
    if (nascEl) {
      const check = validarNascimento(nascimento);
      if (!check.ok) {
        nascEl.setCustomValidity(check.motivo);
        nascEl.reportValidity();
        mostrarFeedback(form, check.motivo, 'erro');
        nascEl.addEventListener('input', () => nascEl.setCustomValidity(''), { once: true });
        return;
      }
      nascEl.setCustomValidity('');
    }

    const novoVoluntario = {
      nome,
      email: sanitizarTexto(email, 120),
      nascimento,
      cpf: sanitizarTexto(cpf, 14),
      telefone: sanitizarTexto(get('telefone'), 16),
      cep: sanitizarTexto(get('cep'), 9),
      logradouro: sanitizarTexto(get('logradouro'), 120),
      cidade: sanitizarTexto(get('cidade'), 80),
      estado: sanitizarTexto(get('estado'), 2).toUpperCase(),
      criadoEm: new Date().toISOString()
    };

    const salvou = salvarDadosLocal(novoVoluntario);
    if (!salvou) {
      console.error('[spa] localStorage indisponível/cheio. Cadastro não persistido.');
      mostrarFeedback(form, 'Não foi possível salvar (armazenamento cheio/indisponível).', 'erro');
      return;
    }

    mostrarFeedback(form, 'Cadastro concluído! Dados salvos localmente.', 'sucesso');
    document.dispatchEvent(new CustomEvent('voluntario:salvo', { detail: novoVoluntario }));
    alert('Cadastro concluído! Seus dados foram salvos no nosso sistema de voluntariado.');
    form.reset();
  });
  return true;
}

/* ---------- Delegação p/ cards dinâmicos ---------- */

export function initCardActions() {
  if (window.__spaCardsInit) return true;
  window.__spaCardsInit = true;
  document.addEventListener('click', (event) => {
    const btn = event.target?.closest?.('[data-action="saber-mais"]');
    if (!btn) return;
    const card = btn.closest('.project-card');
    const titulo = card?.querySelector('h3')?.textContent?.trim() || 'Projeto';
    console.info('[spa] Saber Mais clicado:', titulo);
  });
  return true;
}
