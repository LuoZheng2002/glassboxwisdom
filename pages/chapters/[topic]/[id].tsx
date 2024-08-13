import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // for GitHub Flavored Markdown (tables, footnotes, etc.)
import remarkMath from 'remark-math'; // for math support
import rehypeKatex from 'rehype-katex'; // for math rendering
import rehypeRaw from 'rehype-raw';
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
import { chapterMap } from '@/scripts/chapters';
type Props = {
  topic: string,
  id: string,
  content: string
};

export default function Home({ topic, id, content }: Props) {
  let router = useRouter();
  let click = () => {
    router.push(`/tableofcontents/${topic}`);
  }
  let clickhome = () => {
    router.push('/');
  }
  let titleMap: Map<string, string> = new Map();
  titleMap.set('background', 'Background Knowledge & Inspirations');
  titleMap.set('research', 'Research & Implementation Plan');
  titleMap.set('demo', 'Demo');

  let chapters: JSX.Element[] = [];
  console.log('id: ' + id);
  chapterMap.get(topic)?.forEach((value, key, map) => {
    let click2 = () => {
      router.push(`/chapters/${topic}/${key}`);
    }
    chapters.push(<Button textsize='clamp(15px, 1vw, 50px)' onClick={click2}>
      {value}
    </Button>);
  })

  const renderers = {
    //This custom renderer changes how images are rendered
    //we use it to constrain the max width of an image to its container
    image: ({
      alt,
      src,
      title,
    }: {
      alt?: string;
      src?: string;
      title?: string;
    }) => (
      <img
        alt={alt}
        src={src}
        title={title}
        style={{ maxWidth: 475 }} />
    ),
  };


  return (
    <div style={{ flexGrow: "1", display: "flex", backgroundColor: "transparent", flexDirection: "column", position: "relative" }}>
      <div style={{ display: "flex", backgroundColor: "transparent", flexDirection: "row", position: "absolute", top: "0", bottom: "0", left: "0", right: "0" }}>
        <div style={{ width: "20%", background: "linear-gradient(135deg, pink, aqua, lightyellow)", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "stretch" }}>
            <Button textsize='clamp(20px, 2vw, 50px)' onClick={clickhome}>Home</Button>
            <Button textsize='clamp(15px, 1vw, 50px)' onClick={click}>
              <div style={{ color: "black" }}>{titleMap.get(topic)}</div>
              <div style={{ fontSize: "clamp(15px, 2vw, 50px)" }}>Table of Contents</div>
            </Button>
            <div style={{ fontSize: "2vw", marginLeft: "10px", fontWeight: "bold" }}>More Chapters:</div>
            <div style={{ overflowY: "scroll", display: "flex", flexGrow: "1", flexDirection: "column", width: "100%" }}>
              {chapters}
            </div>
          </div>
        </div>

        <div style={{ width: "80%", display: "flex", flexDirection: "column", flexGrow: "1" }}>
          <div style={{ position: "relative", flexGrow: "1" }}>
            <div style={{ position: "absolute", top: "0", bottom: "0", left: "0", right: "0", overflowY: "auto" }}>
              <div id="chapter tag" className={style2.topic}>{chapterMap.get(topic)?.get(id)}</div>
              <div style={{ margin: "3vw" }}>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm, remarkMath]}
                  rehypePlugins={[rehypeKatex, rehypeRaw]}
                  className={style.markdown}
                >
                  {content}
                </ReactMarkdown>
              </div>

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
  const { topic, id } = context.params as { topic: string, id: string };
  let contentDirectory = path.join(process.cwd(), 'markdown');
  contentDirectory = path.join(contentDirectory, topic);
  const fullPath = path.join(contentDirectory, `${id}.md`);
  let content = "";
  if (fs.existsSync(fullPath)) {
    content = fs.readFileSync(fullPath, 'utf8');
  }
  else {
    content = "Markdown file not found :(";
  }

  return {
    props: {
      topic: topic,
      id: id,
      content: content
    }
  };
}