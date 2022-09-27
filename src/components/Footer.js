import React from "react";
import * as styles from '../styles/footer.module.css'


export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.content}>
                <h4>¿QUIERES UN CAMBIO?</h4>
                <h3 className="playfair" style={{marginTop: "15px"}}>Trabaja con nosotros</h3>
                <p style={{marginTop: "15px"}}>
                  Juntos podemos hacer las
                </p>
                <p style={{marginTop: "-15px"}}>
                    cosas fáciles
                </p>
                <hr style={{marginTop: "25px"}} />
                <div className={styles.grid}>
                    <div className={styles.first}>
                        <p>6180 25 16 58</p>
                    </div>
                    <div className={styles.second}>
                        <p>Calle Miguel Servet 11, Local, Zaragoza</p>
                    </div>
                    <div className={styles.third}>
                        <p>info@thecookies.agency</p>
                    </div>
                </div>
            </div>
        </footer>
    )


}