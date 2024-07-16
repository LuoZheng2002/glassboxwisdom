import Image from "next/image";
import loli from "images/loli.png";
import style from "./index.module.css";
import Button from "@/components/button";
import { useRouter } from "next/router";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
export default function Home() {
    const router = useRouter();
    let contents = ["Chapter 1", "Chapter 2"].map((value) => {
        let click = () => {
            router.push('/chapters');
        }
        return (
            <div className={style.button} style={{backgroundColor: "magenta", display: "flex", justifyContent: "center", margin: "1vw"}}>
                <Button onClick={click}>{value}</Button>
            </div>
        );
    });
    let clickreturn = () =>{
        router.push('/');
    }
    return (
        <div id="master">
            <Navbar>
                <Link href = {"/"}>home</Link> &gt;&nbsp;
                <Link href = {"tableofcontents"}>Background Knowledge & Inspirations</Link>              
            </Navbar>
            <div style={{ position: "relative" }}>
                <div id="image">
                    <Image src={loli} layout="responsive" alt="loli" />
                </div>
                <div style={{ position: "absolute", top: "0", bottom: "0", left: "0", right: "0" }}>
                    <div className={style.background} style={{ fontSize: "3vw", textAlign: "center" }}>Background Knowledge and Inspirations</div>
                    <div className={style.table} style={{ fontSize: "4vw", textAlign: "center" }}>Table of Contents</div>
                    {contents}
                    <div className={style.button} style={{backgroundColor: "magenta", display: "flex", justifyContent: "center", margin: "1vw"}}>
                        <Button onClick={clickreturn}>Go Back</Button>
                    </div>
                </div>
            </div>
        </div>);
}