/* ==========================================================================
   router.js — SPA vanilla. Exporta rotas + render + navigate + init.
   Após cada render dispara 'spa:route' para rebind (form/máscara).
   ========================================================================== */

export const routes = {
  home: `
    <section class="hero">
      <h1>Transformando Vidas: Conheça a Nossa ONG</h1>
      <p class="hero-img-substitute">[Imagem: Voluntários atuando na comunidade.]</p>
    </section>
    <section class="section-content">
      <h2 class="section-title">Nossa Missão</h2>
      <p>Atuamos no combate à vulnerabilidade social por meio de educação e apoio básico.</p>
    </section>
  `,
  cadastro: `
    <form class="form-container" id="spa-form" novalidate>
      <h1 class="form-title">Cadastro de Usuário</h1>
      <div class="form-group">
        <label class="form-label" for="nome">Nome Completo:</label>
        <input class="form-input" type="text" id="nome" required placeholder="Digite seu nome">
      </div>
      <button class="btn-submit" type="submit">Finalizar Cadastro</button>
    </form>
  `,
  404: `
    <section class="section-content">
      <h2 class="section-title">Página não encontrada</h2>
      <p>O conteúdo que você procura não está disponível ou foi movido.</p>
    </section>
  `
};

export function resolveRouteName() {
  const hash = (window.location.hash || '').replace('#/', '').trim();
  return hash || 'home';
}

export function renderContent(routeName) {
  const viewContainer = document.getElementById('main-view');
  if (!viewContainer) return false;
  const name = routeName || resolveRouteName();
  viewContainer.innerHTML = routes[name] || routes['404'];
  document.dispatchEvent(new CustomEvent('spa:route', { detail: { route: routes[name] ? name : '404' } }));
  return true;
}

export function navigate(event, routeName) {
  if (event) event.preventDefault();
  const name = routeName || 'home';
  window.history.pushState({ route: name }, '', `#/${name}`);
  return renderContent(name);
}

export function initRouter() {
  if (!document.getElementById('main-view')) return false;
  if (window.__spaRouterInit) return true;
  window.__spaRouterInit = true;

  window.addEventListener('popstate', (event) => {
    const route = event.state?.route || resolveRouteName();
    renderContent(route);
  });
  window.addEventListener('hashchange', () => {
    renderContent(resolveRouteName());
  });

  renderContent(resolveRouteName());
  return true;
}
