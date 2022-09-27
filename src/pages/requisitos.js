import React from "react";
import Layout from "../components/Layout"
import Header from "../components/Header"
import netlify from '../images/netlifyseeklogo.png'
import graphql from '../images/graphql.png'
import image4 from '../images/image 4.png'
import InformationSection from "../components/InformationSection"

export default function Requisitos(){

    return(
        <Layout>
        <section>
        <Header text1="Requirements" text2="DEVELOPMENT"/>
        <InformationSection logos={true} htext1="¿QUE VAMOS A TENER EN CUENTA?" hstext1="Como afrontas el " s1="problema" hptext1="No hace falta que quede perfecto en todas las resoluciones, lo visualizaremos en una resolución de 1280x800px y 375x667px" htext2="PUNTOS POSITIVOS" s2="ejecutarlo" hstext2="A la hora de" hptext2={['- Utilizar herramientas que proporciona Gatsby', '- Limpieza de código', '- Reutilización del código']} htext3="ALGUNAS DE NUESTRAS TOOLS" s3="Sanity" hstext3="Netfify, Graphql, " img1={netlify} img2={graphql} img3={image4}/>
        </section>
      </Layout>
    )
}export const Head = () => <title>Prueba técnica - Requisitos</title>
