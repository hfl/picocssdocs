import { useRef } from "react";
import Code from "~/components/Code";
import Heading from "~/components/Heading";
import Content from "~/components/docs/Content";
import EditOnGithub from "~/components/docs/EditOnGithub";
import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import metaData from "~/data/meta";

const { titleSuffix } = metaData;

export const meta = () => [
  { title: `卡片（Card） ${titleSuffix}` },
  {
    name: "description",
    content: "用语义标记创建优雅的跨设备和视口的弹性卡片（Card）。",
  },
];

export default function Card() {
  const syntaxRef = useRef();
  const sectioningRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="卡片（Card）"
        description="用语义标记创建优雅的跨设备和视口的弹性卡片（Card）。"
      />

      {/* Table of contents */}
      <TableOfContents
        data={[
          { anchor: "", title: "Syntax", ref: syntaxRef },
          { anchor: "sectioning", title: "Sectioning", ref: sectioningRef },
        ]}
      />

      {/* Content */}
      <Content>
        <section ref={syntaxRef}>
          <article aria-label="Card example">我是一个卡片（Card）！</article>
          <Code className="small">{`<article>我是一个卡片（Card）！</article>`}</Code>
        </section>

        <section ref={sectioningRef}>
          <p>
            你可以在 <Code display="inline">{`<article>`}</Code>里使用{" "}
            <Code display="inline">{`<header>`}</Code> 和 <Code display="inline">{`<footer>`}</Code>
            。
          </p>
          <Heading level={2} anchor="sectioning">
            Sectioning
          </Heading>
          <article aria-label="Card sectioning example">
            <header>Header</header>Body<footer>Footer</footer>
          </article>
          <Code>{`<article>
  <header>Header</header>
  Body
  <footer>Footer</footer>
</article>`}</Code>
        </section>

        {/* Edit on GitHub */}
        <EditOnGithub file="docs.card.jsx" />
      </Content>
    </>
  );
}
