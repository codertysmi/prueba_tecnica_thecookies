import React from 'react';
import * as styles from '../styles/informationsection.module.css'
import '../styles/global.css'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

export default function InformationSecition(props){
    const breakpoints = useBreakpoint();
    return(
        <section className={styles.infsection}>
            <div className={styles.parent}>

                <div className={styles.div1}>
                    <h4>{props.htext1}</h4>
                    {breakpoints.sm || breakpoints.sm ? <><h3 className="playfair">{props.hstext1} </h3><strong className='playfair' style={{fontSize: "40px"}}>{props.s1}</strong></> : <h3 className="playfair">{props.hstext1}  <strong className='playfair'>{props.s1}</strong></h3>}
                    <p>{props.hptext1}</p>
                </div>
                <div className={styles.div2}>
                    <h4>{props.htext2}</h4>
                    {breakpoints.sm || breakpoints.sm ? <><h3 className="playfair">{props.hstext2} </h3><strong className='playfair' style={{fontSize: "40px"}}>{props.s2}</strong></> : <h3 className="playfair">{props.hstext2}  <strong className='playfair'>{props.s2}</strong></h3>}
                    {props.hptext2.map(item=><p key={item}>{item}</p>)}
                </div>

                <div className={styles.div3}>
                    <h4>{props.htext3}</h4>
                    {breakpoints.sm || breakpoints.sm ? <><h3 className="playfair">{props.hstext3} </h3><strong className='playfair' style={{fontSize: "40px"}}>{props.s3}</strong></> : <h3 className="playfair">{props.hstext3}  <strong className='playfair'>{props.s3}</strong></h3>}
                        <div className={styles.images}>
                            <div className={styles.img1} style={{alignSelf: "self-end", justifyContent: "center", alignContent: "center",  alignItems: "center", position: "relative"}}>
                                <img src={props.img1} alt="Desc Img1" style={props.logos ? {height: "auto", position: "absolute", bottom: 0, zIndex: "2", width: "70%", marginLeft: "15%", marginBottom: "10%"}  :{height: "auto", position: "absolute", bottom: 0, zIndex: "99", maxWidth: "100%", marginLeft: "5%"}}/>
                                <div className={styles.divimg1}/>
                            </div>
                            <div className={styles.img2} style={{alignSelf: "self-end",  justifyContent: "center", alignContent: "center",  alignItems: "center", position: "relative"}}>
                                <img src={props.img2} alt="Desc Img2" style={props.logos ? {height: "auto", position: "absolute", bottom: 0, zIndex: "2", width: "70%", marginLeft: "15%", marginBottom: "10%"}  :{height: "auto", position: "absolute", bottom: 0, zIndex: "99", maxWidth: "100%", marginLeft: "0%"}}/>
                                <div className={styles.divimg2}/>
                            </div>
                            <div className={styles.img3}  style={{alignSelf: "self-end", justifyContent: "center", alignContent: "center",  alignItems: "center", position: "relative"}}>
                                <img src={props.img3} alt="Desc Img3" style={props.logos ? {height: "auto", position: "absolute", bottom: 0, zIndex: "2", width: "70%", marginLeft: "15%", marginBottom: "10%"}  :{height: "auto", position: "absolute", bottom: 0, zIndex: "99", maxWidth: "100%", marginLeft: "-2%"}}/>
                                <div className={styles.divimg3}/>
                            </div>                           
                        </div>
                </div>

            </div>
        </section>
    )

}