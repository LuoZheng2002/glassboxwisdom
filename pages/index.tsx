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
type Props = {
  content: string
};

export default function Home({ content }: Props) {
  const router = useRouter();

  const handleClick = () => {
    // Perform any action before navigation, if needed
    console.log('Button clicked!');
    // Navigate programmatically
    router.push('/chapters');
  };


  return (
    <div className={style.relative}>
      <Image src={scifi} alt="hello" />
      <div className={style.welcome}>Welcome AI enthusiast!</div>
      <div className={style.intro}>
        <div>glassboxwisdom.com is a place for&nbsp;
          <span className={style.span}>Explicit</span> and&nbsp;
          <span className={style.span}>Explainable</span> AI,
        </div>
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;that combines&nbsp;
          <span className={style.span}>Symbolism</span> with&nbsp;
          <span className={style.span}>Connectionism</span>.
        </div>
      </div>
      <div className={style.journey}>
        <div>Let's dive into the journey! (Click↓)</div>
        <Button onClick={handleClick}>Background Knowledge & Inspirations</Button>
      </div>
      <Image src={diamond} width={180} alt='diamond' className={style.diamond} />
      <Image src={glassblock} width={300} alt='glassblock' className={style.glassblock} />
      <div>沪ICP备2024082259号</div>
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