import CardFoto from './CardFoto.jsx'
import Bolsa from '../assets/bolsa.jpg'
import Presilha from '../assets/presilha.jpg'
import Oculos from '../assets/oculos.jpg'
 function Galeria() {
 // Cada objeto do array representa um card que aparecerá na tela.
 const fotos = [
 {
 imagem: Bolsa,
 titulo: 'Interface moderna',
 descricao: 'Layout inicial com destaque visual e navegação clara.',
 },
 {
 imagem: Presilha,
 titulo: 'Componentes reutilizáveis',
 descricao: 'Peças pequenas que podem ser combinadas em páginas.',
 },
 {
 imagem: Oculos,
titulo: 'Galeria responsiva',
descricao: 'Cards organizados para apresentar imagens e informações.',
},
 ]
 return (
 <section className="galeria">
 <div className="titulo-secao">
 <span>Galeria</span>
 <h2>Resultado visual da Home</h2>
 </div>
<div className="grade-fotos">
{fotos.map((foto) => (
 <CardFoto
 key={foto.titulo}
 imagem={foto.imagem}
titulo={foto.titulo}
descricao={foto.descricao}
 />
))}
</div>
</section>
)
 }
 export default Galeria