function Container({ children }) {
// children é tudo que fica dentro de <Container>...</Container>.
// O componente padroniza largura e espaçamento das páginas.
 return <section className="container">{children}</section>
 }

 export default Container