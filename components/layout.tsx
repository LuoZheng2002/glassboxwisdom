import Image from "next/image"
import glassblock from "images/glassblock.webp"
import style from "./layout.module.css"
type Prop = {
    children: JSX.Element;
}

export default function Layout({children}: Prop) {
    return (
        <div>
            <div className={style.outer}>
                <Image src={glassblock} alt="picture" width={50} height={50} style={{display: "inline-flex", marginRight: "20px"}}/>
                <span className={style.website}>glassboxwisdom.com</span>
                <span className={style.description}>We thrive to provide an explicit explainable AI solution.</span>
            </div>
            
            {children}
        </div>
    )
  }