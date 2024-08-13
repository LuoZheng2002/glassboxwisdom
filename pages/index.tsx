import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // for GitHub Flavored Markdown (tables, footnotes, etc.)
import remarkMath from 'remark-math'; // for math support
import rehypeKatex from 'rehype-katex'; // for math rendering
import 'katex/dist/katex.min.css'; // KaTeX CSS for math rendering
import { GetStaticProps } from 'next';
import path from 'path';
import fs from 'fs';
import style from './index.module.css';
import Image from 'next/image';
import scifi from 'images/scifi.jpg';
import glassblock from 'images/glassblock.webp';
import diamond from 'images/diamond.webp';
import Button from '@/components/button';
import { useRouter } from 'next/router';
import Head from 'next/head';
type Props = {
};

export default function Home({ }: Props) {
  const router = useRouter();

  const handleClick = () => {
    // Perform any action before navigation, if needed
    console.log('Button clicked!');
    // Navigate programmatically
    router.push('/tableofcontents/background');
  };
  const handleClick2 = () =>{
    router.push('/tableofcontents/research');
  }
  const handleClick3 = () =>{
    router.push('/tableofcontents/demo');
  }

  return (
    <div style={{flexGrow: "1", display: "flex", flexDirection:"column"}}>
      <Head>
        <title>Glass Box Wisdom</title>
        <meta name="description" content="This is an awesome page built with Next.js" />
      </Head>
      <div className={style.relative} style={{flexGrow: "1"}}>
        <Image src={scifi} alt="hello" fill objectFit='cover'/>
        <div style={{position: 'absolute', top: "0%", left: "0%", right: "0%", bottom: "0%", display: "flex", flexDirection: "column" }} >
          <div style={{ fontSize: "5vw", margin: "1vw 0 0 0", textAlign: "center" }} className={style.welcomecolor}>Welcome AI enthusiast!</div>
          <div style={{ fontSize: "3vw", margin: "0 0 0 2vw" }} className={style.intro}>
            glassboxwisdom.com is a place for&nbsp;
            <span>glass-box-level explainable</span> AI, <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;that utilizes both&nbsp;
            <span>Symbolism</span> and&nbsp;
            <span>Connectionism</span>&nbsp;approaches.
          </div>
          <div style={{ display: "flex", flexGrow: "1" }}>
            <div style={{ width: "30%", height: "auto", position: "relative", display: "flex" }}>
              <div className={style.diamond}>
                <Image src={diamond} alt='diamond' layout="responsive" />
              </div>
              <div className={style.glassblock}>
                <Image src={glassblock} layout="responsive" alt='glassblock' />
              </div>

            </div>
            <div style={{display: "flex", alignItems:"start", marginLeft:"2vw", flexGrow: "1", flexDirection: "column" }}>
              <div style={{display: "flex"}} className={style.journey}>Let's dive into the journey! (Click↓)</div>
              <div style={{display: "flex", flexDirection: "column", alignItems: "start", marginLeft: "5vw"}}>
                <Button onClick={handleClick}  textsize='2.5vw'>Background Knowledge & Inspirations</Button>
                <Button onClick={handleClick2} textsize='2.5vw'>Research and Implementation Plan</Button>
                <Button onClick={handleClick3} textsize='2.5vw'>Demo</Button>
              </div>
              
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {

    }
  };
}