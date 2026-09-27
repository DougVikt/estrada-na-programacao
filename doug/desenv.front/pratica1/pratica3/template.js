/* template.js — gera strings HTML com escape (anti-XSS). Sem acesso a DOM/storage. */

export function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function criarCardProjeto(projeto) {
  const p = projeto || {};
  const titulo = escapeHtml(p.titulo ?? 'Projeto sem título');
  const descricao = escapeHtml(p.descricao ?? '');
  const categoria = escapeHtml(p.categoria ?? 'Geral');
  const status = escapeHtml(p.status ?? 'Ativo');
  const statusClasse = (p.status === 'Urgente') ? 'badge-urgent' : 'badge-success';

  return `
      <article class="project-card flex-component">
        <div class="card-header">
          <span class="badge ${statusClasse}">
            ${status}
          </span>
          <h3 class="font-size-md">${titulo}</h3>
        </div>
        <p class="font-size-sm">${descricao}</p>
        <footer class="card-footer">
          <span class="meta-info-item">Categoria: ${categoria}</span>
          <button class="btn-submit" type="button" data-action="saber-mais" style="width: auto; padding: 8px 16px;">Saber Mais</button>
        </footer>
      </article>
    `;
}

export function criarCardVoluntario(voluntario) {
  const v = voluntario || {};
  const nome = escapeHtml(v.nome ?? 'Sem nome');
  const email = escapeHtml(v.email ?? '');
  const cidade = escapeHtml(v.cidade ?? '');
  const estado = escapeHtml(v.estado ?? '');

  return `
      <article class="project-card flex-component">
        <div class="card-header">
          <span class="badge badge-success">Voluntário</span>
          <h3 class="font-size-md">${nome}</h3>
        </div>
        <p class="font-size-sm">${email}</p>
        <footer class="card-footer">
          <span class="meta-info-item">${cidade}${estado ? ' / ' + estado : ''}</span>
        </footer>
      </article>
    `;
}
