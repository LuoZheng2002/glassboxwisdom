import Image, { StaticImageData } from "next/image";
import style from "./index.module.css";
import Button from "@/components/button";
import { useRouter } from "next/router";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";

import backgroundImage from "images/anime.jpg";
import researchImage from "images/ayaka.jpg";
import demoImage from "images/fenina.jpg";
import { assert } from "console";
import {backgroundChapterMap, researchChapterMap, demoChapterMap, chapterMap} from "@/scripts/chapters";

export const getStaticPaths: GetStaticPaths = async () => {
    const paths: string[] = [];
    return { paths, fallback: false };
};

type Prop = {
    id: string;
}




export default function Home({id}: Prop) {
    const router = useRouter();
    let imageMap: Map<string, StaticImageData> = new Map();
    imageMap.set('background', backgroundImage);
    imageMap.set('research', researchImage);
    imageMap.set('demo', demoImage);

    let titleMap: Map<string, string> = new Map();
    titleMap.set('background', 'Background Knowledge & Inspirations');
    titleMap.set('research', 'Research & Implementation Plan');
    titleMap.set('demo', 'Demo');




    let contents: JSX.Element[] = [];
    let map = chapterMap.get(id);
    map?.forEach((value, key, map) => {
        let click = () => {
            router.push(`/chapters/${id}/${key}`);
        }
        contents.push(
            <div className={style.button} style={{ display: "flex", justifyContent: "center", margin: "1vw" }}>
                <Button textsize="2.5vw" onClick={click}>{value}</Button>
            </div>
        );
    });

    let clickreturn = () => {
        router.push('/');
    }
    return (
        <div style={{ flexGrow: "1", display: "flex", flexDirection: "column" }}>
            <div style={{ position: "relative", flexGrow: "1" }}>
                <div id="image">
                    <Image src={imageMap.get(id)!} fill objectFit='cover' alt="loli" />
                </div>
                <div style={{ position: "absolute", top: "0", bottom: "0", left: "0", right: "0", display: "flex", flexDirection: "column" }}>
                    <div className={style.background} style={{ fontSize: "3vw", textAlign: "center" }}>{titleMap.get(id)}</div>
                    <div className={style.table} style={{ fontSize: "4vw", textAlign: "center" }}>Table of Contents</div>
                    <div style={{ flexGrow: "1", overflowY: "auto", marginBottom: "5vw"}}>
                        {contents}
                    </div>
                </div>
                <div style={{position: "absolute", top: "1vw", left: "1vw"}}>
                    <Button textsize="3vw" onClick={clickreturn}>Home</Button>
                </div>
            </div>
        </div>);
}

export const getStaticProps: GetStaticProps<Prop> = async (context) => {
    const { id } = context.params as { id: string };
    return {
        props: {
            id: id
        }
    };
}