/* main.js — entrada type="module". Orquestra módulos + offline + rebind SPA. */

import { buscarDados } from './storege.js';
import { criarCardProjeto } from './template.js';
import { initRouter, navigate } from './router.js';
import {
  projetosDados,
  renderizarProjetos,
  restaurarVoluntarios,
  initMask,
  initForm,
  initCardActions,
  validarCPF,
  validarNascimento,
  validarEmail,
  sanitizarTexto
} from './script.js';

function initOfflineBanner() {
  let banner = document.getElementById('offline-banner');
  if (!banner) {
    banner = document.createElement('div');
    banner.id = 'offline-banner';
    banner.setAttribute('role', 'alert');
    document.body.prepend(banner);
  }
  const atualizar = () => {
    const online = navigator.onLine;
    banner.textContent = online ? '' : 'Você está offline. Máscaras/CDN podem falhar; o cadastro local continua funcionando.';
    banner.hidden = online;
    if (!online) console.warn('[spa] offline detectado (navigator.onLine === false).');
  };
  window.addEventListener('online', atualizar);
  window.addEventListener('offline', atualizar);
  atualizar();
}

function initSpaLinks() {
  if (window.__spaLinksInit) return;
  window.__spaLinksInit = true;
  document.addEventListener('click', (event) => {
    const link = event.target?.closest?.('a[data-route]');
    if (!link) return;
    if (!document.getElementById('main-view')) return; // fallback: navegação normal
    event.preventDefault();
    navigate(event, link.dataset.route);
    document.getElementById('main-view')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function boot() {
  const container = document.getElementById('projetos-container');
  if (container) {
    if (!renderizarProjetos(projetosDados)) {
      container.innerHTML = projetosDados.map(criarCardProjeto).join('');
    }
    restaurarVoluntarios();
  }

  initRouter();
  initSpaLinks();

  if (!initMask()) {
    console.warn('[spa] Máscaras inativas nesta página (sem #cpf ou sem IMask).');
  }
  initForm();
  initCardActions();
  initOfflineBanner();

  // Helpers para a atividade de validação no Console:
  window.__spaTest = {
    validarCPF,
    validarNascimento,
    validarEmail,
    sanitizarTexto,
    buscarDados,
    navegar: (rota) => navigate(null, rota)
  };
}

document.addEventListener('DOMContentLoaded', boot);

// Rebind após cada troca de rota (form injetado dinamicamente):
document.addEventListener('spa:route', () => {
  initMask();
  initForm();
});
