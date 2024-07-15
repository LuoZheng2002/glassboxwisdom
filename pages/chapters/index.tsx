import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // for GitHub Flavored Markdown (tables, footnotes, etc.)
import remarkMath from 'remark-math'; // for math support
import rehypeKatex from 'rehype-katex'; // for math rendering
import 'katex/dist/katex.min.css'; // KaTeX CSS for math rendering
import { GetStaticProps } from 'next';
import path from 'path';
import fs from 'fs';
import style from 'markdown-styles.module.css';
import style2 from './index.module.css';
type Props = {
  content: string
};

export default function Home({ content }: Props) {
  return (
    <div>
        <div className={style2.topic}>
        Chapter 1: Connectionism AI
      </div>
    <div className={style2.markdownwrap}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        className={style.markdown}
        >
        {content}
      </ReactMarkdown>
    </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const contentDirectory = path.join(process.cwd(), 'markdown');
  const fullPath = path.join(contentDirectory, 'introduction.md');
  const content = fs.readFileSync(fullPath,'utf8');
  return {
    props: {
      content: content
    }
  };
}