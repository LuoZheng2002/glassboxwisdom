import Image from "next/image";
import loli from "images/anime.jpg";
import style from "./index.module.css";
import Button from "@/components/button";
import { useRouter } from "next/router";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
export default function Home() {
    const router = useRouter();
    let map2: Map<string, string> = new Map();
    map2.set('1', 'Chapter 1: Connectionism AI');
    map2.set('2', 'Chapter 2');
    map2.set('3', 'Chapter 3');
    map2.set('4', 'Chapter 3');
    map2.set('5', 'Chapter 3');
    map2.set('6', 'Chapter 3');
    map2.set('7', 'Chapter 3');
    map2.set('8', 'Chapter 3');
    map2.set('9', 'Chapter 3');
    map2.set('10', 'Chapter 3');
    map2.set('11', 'Chapter 3');
    map2.set('12', 'Chapter 3');
    map2.set('13', 'Chapter 3');
    map2.set('14', 'Chapter 3');
    map2.set('15', 'Chapter 3');
    let contents: JSX.Element[] = [];
    map2.forEach((value, key, map)=>{
        let click = () => {
            router.push(`/chapters/chapter${key}`);
        }
        contents.push(
            <div className={style.button} style={{display: "flex", justifyContent: "center", margin: "1vw" }}>
                <Button textSize="2.5vw" onClick={click}>{value}</Button>
            </div>
        );
    });
    
    let clickreturn = () => {
        router.push('/');
    }
    return (
        <div style={{ flexGrow: "1", display: "flex", backgroundColor: "yellow", flexDirection: "column" }}>
            <Navbar>
                <Link href={"/"}>home</Link> &gt;&nbsp;
                <Link href={"tableofcontents"}>Background Knowledge & Inspirations</Link>
            </Navbar>
            <div style={{ position: "relative", flexGrow: "1" }}>
                <div id="image">
                    <Image src={loli} fill objectFit='cover' alt="loli" />
                </div>
                <div style={{ position: "absolute", top: "0", bottom: "0", left: "0", right: "0", display: "flex", flexDirection: "column"}}>
                    <div className={style.background} style={{ fontSize: "3vw", textAlign: "center" }}>Background Knowledge and Inspirations</div>
                    <div className={style.table} style={{ fontSize: "4vw", textAlign: "center" }}>Table of Contents</div>
                        <div style={{flexGrow: "1", overflowY: "auto" }}>
                            {contents}
                        </div>
                    <div className={style.button} style={{display: "flex", justifyContent: "center", margin: "1vw" }}>
                        <Button textSize="2.5vw" onClick={clickreturn}>Go Back</Button>
                    </div>
                </div>
            </div>
        </div>);
}