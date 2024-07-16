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
  content: string
};

export default function Home({ content }: Props) {
  const router = useRouter();

  const handleClick = () => {
    // Perform any action before navigation, if needed
    console.log('Button clicked!');
    // Navigate programmatically
    router.push('/tableofcontents');
  };
  const handleClick2 = () =>{
    router.push('/test');
  }
  const handleClick3 = () =>{
    router.push('/test');
  }

  return (
    <div style={{flexGrow: "1", display: "flex", backgroundColor:"yellow", flexDirection:"column"}}>
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
            <span>Explicit</span> and&nbsp;
            <span>Explainable</span> AI, <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;that combines&nbsp;
            <span>Symbolism</span> with&nbsp;
            <span>Connectionism</span>.
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
            <div style={{display: "flex", alignItems: "center", flexGrow: "1", flexDirection: "column" }}>
              <div style={{display: "flex"}} className={style.journey}>Let's dive into the journey! (Click↓)</div>
              <Button onClick={handleClick}  textSize='2.5vw'>Background Knowledge & Inspirations</Button>
              <Button onClick={handleClick2} textSize='2.5vw'>Research and Implementation Plan</Button>
              <Button onClick={handleClick3} textSize='2.5vw'>Demo</Button>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const contentDirectory = path.join(process.cwd(), 'markdown');
  const fullPath = path.join(contentDirectory, 'introduction.md');
  const content = fs.readFileSync(fullPath, 'utf8');
  return {
    props: {
      content: content
    }
  };
}