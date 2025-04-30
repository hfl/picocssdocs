import { useRef } from "react";
import Code from "~/components/Code";
import Heading from "~/components/Heading";
import Link from "~/components/Link";
import Content from "~/components/docs/Content";
import EditOnGithub from "~/components/docs/EditOnGithub";
import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import metaData from "~/data/meta";

const { titleSuffix } = metaData;

export const meta = () => [
  { title: `Landmarks & section ${titleSuffix}` },
  {
    name: "description",
    content: "用语义 landmark 和 section 构建网页以便更方便访问和优雅显示。",
  },
];

export default function LandmarksAndSection() {
  const landmarksRef = useRef();
  const rootContainerRef = useRef();
  const sectionRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="Landmarks & section"
        description="用语义 landmark 和 section 构建网页以便更方便访问和优雅显示。"
      />

      {/* Table of content */}
      <TableOfContents
        data={[
          {
            anchor: "",
            title: "Landmark",
            ref: landmarksRef,
          },
          {
            anchor: "root-container",
            title: "定制 root container",
            ref: rootContainerRef,
          },
          {
            anchor: "section",
            title: "Section",
            ref: sectionRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section ref={landmarksRef}>
          <p>
            <Code display="inline">{`<header>`}</Code>、<Code display="inline">{`<main>`}</Code> 和{" "}
            <Code display="inline">{`<footer>`}</Code> 做为 <Code display="inline">{`<body>`}</Code>{" "}
            的直接子元素提供了一个自适应的竖向 <code>padding</code>
          </p>
          <Code>{`<body>
  <header>...</header>
  <main>...</main>
  <footer>...</footer>
</body>`}</Code>
        </section>

        <section ref={rootContainerRef}>
          <Heading level={2} anchor="root-container">
            Root container
          </Heading>
          <p>
            如果你需要为 <Code display="inline">{`<header>`}</Code>、
            <Code display="inline">{`<main>`}</Code>和<Code display="inline">{`<footer>`}</Code>
            定制默认的 root container，你可以用另一个 CSS 选择器重新编译 Pico。
          </p>

          <p>
            这对 <a href="https://reactjs.org/">React</a>、{" "}
            <a href="https://www.gatsbyjs.com/">Gatsby</a> 或者{" "}
            <a href="https://nextjs.org/">Next.js</a>都很有用。
          </p>
          <Code language="scss">{`/* Custom Class-less version for React */
@use "pico" with (
  
  // Define the root element used to target <header>, <main>, <footer>
  // with $enable-semantic-container and $enable-responsive-spacings
  $semantic-root-element: "#root",
  
  // Enable <header>, <main>, <footer> inside $semantic-root-element as containers
  $enable-semantic-container: true,

  // Enable .classes
  $enable-classes: false
)`}</Code>

          <p>上面代码将为 Pico 编译如下容器：</p>
          <Code language="css">{`/* Containers */
#root > header,
#root > main,
#root > footer {
  ...
}`}</Code>
          <p>
            学习更多内容在 <Link to="/docs/sass">用 SASS 编译定制版本 Pico</Link>。
          </p>
        </section>

        <section ref={sectionRef}>
          <Heading level={2} anchor="section">
            Section
          </Heading>
          <p>
            <Code display="inline">{`<section>`}</Code> 提供一个自适应 <code>margin-bottom</code>{" "}
            来分离你的各个 section。
          </p>
        </section>

        {/* Edit on GitHub */}
        <EditOnGithub file="docs.landmarks-section.jsx" />
      </Content>
    </>
  );
}
