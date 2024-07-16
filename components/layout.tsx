import Image from "next/image"
import glassblock from "images/glassblock.webp"
import style from "./layout.module.css"
type Prop = {
    children: JSX.Element;
}

export default function Layout({children}: Prop) {
    return (
        <div style={{width: "100%", height: "100%", display: "flex", flexDirection:"column"}}>
            <div className={style.outer}>
                <span style={{width: "2.8vw", height: "2.8vw", marginRight: "1.2vw", marginLeft: "5px"}}>
                    <Image src={glassblock} alt="picture" layout="responsive"/>
                </span>
                <span className={style.website}>glassboxwisdom.com</span>
                <span className={style.description}>We are committed to providing an explicit & explainable AI solution.</span>
            </div>
            {children}
            <div style={{backgroundColor:"lightgray", textAlign:"center", fontSize:"10px"}}>沪ICP备2024082259号</div>
        </div>
    )
  }