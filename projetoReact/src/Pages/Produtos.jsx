import Container from '../Components/Container.jsx'
import SecaoTexto from '../Components/SecaoTexto.jsx'
 import Botao from '../Components/Botao.jsx'
 function Produtos() {
 return (
 <Container>
 <SecaoTexto
titulo="Produtos"
 texto="A página de produtos apresenta uma chamada simples e reaproveita o componente Botao 
para manter consistência visual."
 />
<Botao texto="Ver detalhes" />
 </Container>
 )
 }
 export default Produtos
