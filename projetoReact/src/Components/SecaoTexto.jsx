function SecaoTexto({ titulo, texto }) {
 // Este componente evita repetir a mesma estrutura de título e parágrafo.
 return (
 <section className="secao-texto">
 <h2>{titulo}</h2>
 <p>{texto}</p>
 </section>
 )
 }

export default SecaoTexto