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
                <span style={{width: "4vw", height: "4vw", marginRight: "2vw"}}>
                    <Image src={glassblock} alt="picture" layout="responsive"/>
                </span>
                <span className={style.website}>glassboxwisdom.com</span>
                <span className={style.description}>We are committed to providing an explicit & explainable AI solution.</span>
            </div>
            {children}
            <div>沪ICP备2024082259号</div>
        </div>
    )
  }