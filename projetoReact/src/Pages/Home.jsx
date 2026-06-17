import Container from '../Components/Container.jsx'
 import Hero from '../Components/Hero.jsx'
 import SecaoTexto from '../Components/SecaoTexto.jsx'
 import Galeria from '../Components/Galeria.jsx'
function Home() {
 return (
<Container>
 <Hero />
 <SecaoTexto
 titulo="Aprendizado por construção"
 texto="Nesta página, os componentes são combinados para formar uma tela completa. A Home usa
 Hero, seção de texto e galeria para demonstrar composição em React."
 />
 <Galeria/>
</Container>
 )
 }
export default Home
