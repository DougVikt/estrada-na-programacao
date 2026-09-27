/* storege.js — camada única de acesso ao localStorage (não mexer no nome do arquivo) */

const CHAVE_VOLUNTARIOS = 'ong_voluntarios';

export function salvarDados(chave, dados) {
  try {
    localStorage.setItem(chave, JSON.stringify(dados));
    return true;
  } catch (e) {
    console.error('[storege] Falha ao salvar:', e);
    return false;
  }
}

export function buscarDados(chave) {
  try {
    const raw = localStorage.getItem(chave);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error('[storege] Falha ao ler:', e);
    return [];
  }
}

// Compatibilidade com o código antigo do formulário
export function salvarDadosLocal(novoVoluntario) {
  const listaAtual = buscarDados(CHAVE_VOLUNTARIOS);
  listaAtual.push(novoVoluntario);
  return salvarDados(CHAVE_VOLUNTARIOS, listaAtual);
}

export function listarVoluntarios() {
  return buscarDados(CHAVE_VOLUNTARIOS);
}

export { CHAVE_VOLUNTARIOS };
