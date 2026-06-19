import Botao from './Botao.jsx'
 function Hero() {
// Hero é a primeira área visual da Home e apresenta a ideia do projeto.
return (
<section className="hero">
<div className="hero-conteudo">
<span className="etiqueta">Projeto guiado em React</span>
 <h1>Do Café ao Caramelo: Acessórios que Transformam o Look</h1>
 <p>
 Em 2026, o marrom se destaca como uma das principais tendências em acessórios,
 trazendo uma estética elegante, natural e atemporal. Versátil e sofisticado, ele se torna o novo neutro da moda, 
 combinando com tudo e valorizando visuais mais minimalistas e autênticos.
</p>
<Botao texto="Começar agora" />
 </div>
 <div className="painel-projeto" aria-label="Resumo do projeto">
 <strong>Componentes do site</strong>
 <span>Header</span>
<span>Hero</span>
 <span>Galeria</span>
<span>Footer</span>
</div>
</section>
 )
   }
 export default Hero