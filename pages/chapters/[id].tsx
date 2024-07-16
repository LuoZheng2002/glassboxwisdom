import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // for GitHub Flavored Markdown (tables, footnotes, etc.)
import remarkMath from 'remark-math'; // for math support
import rehypeKatex from 'rehype-katex'; // for math rendering
import 'katex/dist/katex.min.css'; // KaTeX CSS for math rendering
import { GetStaticPaths, GetStaticProps } from 'next';
import path from 'path';
import fs from 'fs';
import style from 'markdown-styles.module.css';
import style2 from './index.module.css';
import Button from '@/components/button';
import { useRouter } from 'next/router';
import { Navbar } from '@/components/navbar';
import Link from 'next/link';
type Props = {
  id: string,
  content: string
};

export default function Home({ id, content }: Props) {
  let router = useRouter();
  let click = ()=>{
    router.push("/tableofcontents");
  }
  return (
    <div style={{ flexGrow: "1", display: "flex", backgroundColor: "transparent", flexDirection: "column", position: "relative" }}>
      <div style={{ display: "flex", backgroundColor: "transparent", flexDirection: "row", position: "absolute", top: "0", bottom: "0", left: "0", right: "0" }}>
        <div style={{ width: "20%", backgroundColor: "lightgray", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div>
            <Button textSize='2vw' onClick={click}>Back</Button>
          </div>
        </div>
        <div style={{ width: "80%", display: "flex", flexDirection: "column", flexGrow: "1" }}>
          <Navbar>
            <Link href={"/"}>home</Link> &gt;&nbsp;
            <Link href={"tableofcontents"}>Background Knowledge & Inspirations</Link> &gt;&nbsp;
            <Link href={"chapters"}>Chapter 1</Link>
          </Navbar>
          <div id="chapter tag" className={style2.topic}>
            Chapter 1: Connectionism AI
          </div>
          <div className={style2.markdownwrap} style={{position:"relative", flexGrow: "1"}}>
            <div style={{position: "absolute", top:"0", bottom: "0", left:"0", right:"0"}}>
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeKatex]}
                className={style.markdown}
              >
                {content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = [];
  return { paths, fallback: false };
};


export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { id } = context.params as { id: string };
  const contentDirectory = path.join(process.cwd(), 'markdown');
  const fullPath = path.join(contentDirectory, 'introduction.md');
  const content = fs.readFileSync(fullPath, 'utf8');

  return {
    props: {
      id: id,
      content: content
    }
  };
}