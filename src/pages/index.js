import * as React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import InformationSection from "../components/InformationSection"
import alberto from '../images/foto-alberto-thecookies-min.png'
import guillermo from '../images/foto-guillermo-thecookies-min.png'
import nagore from '../images/foto-nagore-thecookies-min.png'

const IndexPage = () => {
  return (
    <Layout>
      <section>
        <Header text1="Prueba técnica" text2="FRONTEND DEVELOPER"/>
        <InformationSection logos={false} htext1="¿QUE TIENES QUE HACER?" hstext1="Clonar esto en " s1="Gatsby" hptext1="Crea un repositorio publico en Github con un símil de este contenido y compártelo con nosotros cuando lo tengas listo." htext2="ENVIRONMENT" hstext2="Entorno de" s2="desarollo" hptext2={['- Yarn classic', '- Última versión de Gatsby', '- React']} htext3="¿QUE TIENES QUE HACER?" s3="Sanity" hstext3="Clonar esto en" img1={guillermo} img2={nagore} img3={alberto}/>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Prueba técnica</title>
