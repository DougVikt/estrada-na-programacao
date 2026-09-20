/* ==========================================================================
   ARQUITETURA SPA: ROTEADOR NATIVO VANILLA JAVASCRIPT
   ========================================================================== */

// 1. Dicionário de Rotas: Armazena o conteúdo estrutural de cada página
const routes = {
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

// 2. Função de Renderização: Altera o conteúdo do container principal
function renderContent(routeName) {
  const viewContainer = document.getElementById('main-view');
  
  // Se a rota não existir no dicionário, renderiza a página 404
  const htmlContent = routes[routeName] || routes['404'];
  
  // Injeção programática via DOM
  viewContainer.innerHTML = htmlContent;
}

// 3. Gerenciador de Navegação: Intercepta o clique e atualiza o histórico do navegador
function navigate(event, routeName) {
  event.preventDefault(); // Impede o recarregamento padrão da página (F5)
  
  // Atualiza a URL na barra de endereços do navegador de forma limpa
  window.history.pushState({ route: routeName }, "", `#/${routeName}`);
  
  // Renderiza o novo conteúdo na tela
  renderContent(routeName);
}

// 4. Escuta de Histórico: Garante que os botões "Avançar" e "Voltar" do navegador funcionem
window.addEventListener('popstate', (event) => {
  const route = event.state?.route || 'home';
  renderContent(route);
});

// 5. Inicialização da Aplicação
document.addEventListener('DOMContentLoaded', () => {
  // Renderiza a página inicial com base na URL atual ou adota a rota 'home' por padrão
  const initialRoute = window.location.hash.replace('#/', '') || 'home';
  renderContent(initialRoute);
});
