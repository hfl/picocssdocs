import { useRef } from "react";
import Code from "~/components/Code";
import Heading from "~/components/Heading";
import Link from "~/components/Link";
import Content from "~/components/docs/Content";
import EditOnGithub from "~/components/docs/EditOnGithub";
import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import examples from "~/data/examples";
import metaData from "~/data/meta";

const { titleSuffix, cdnBaseUrl } = metaData;
const classlessExample = examples.find((example) => example.title === "Class-less preview");

export const meta = () => [
  { title: `无类版本 ${titleSuffix}` },
  {
    name: "description",
    content: "Pico 的 .classless 版本采用极简主义，为喜欢极简 HTML 纯粹主义者提供语义选择。",
  },
];

export default function Classless() {
  const introductionRef = useRef();
  const usageRef = useRef();
  const rootContainerRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="无类版本"
        description={
          <>
            Pico 的 <code>.classless</code> 版本采用极简主义，为喜欢极简 HTML
            纯粹主义者提供语义选择。
          </>
        }
      />

      {/* Table of content */}
      <TableOfContents
        data={[
          {
            anchor: "",
            title: "语义容器",
            ref: introductionRef,
          },
          {
            anchor: "usage",
            title: "用法",
            ref: usageRef,
          },
          {
            anchor: "root-container",
            title: "定制根容器",
            ref: rootContainerRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section ref={introductionRef}>
          <p>
            Pico 提供一个 <code>.classless</code> 版本（
            <Link to={classlessExample.links.preview}>示例</Link>
            ）。
          </p>
          <p>
            此版本中，<Code display="inline">{`<body>`}</Code> 内的{" "}
            <Code display="inline">{`<header>`}</Code>、 <Code display="inline">{`<main>`}</Code> 和{" "}
            <Code display="inline">{`<footer>`}</Code> 都做为{" "}
            <Link to="/docs/container">容器（container）</Link>
            来定义一个居中或者流体的视口（viewport）。
          </p>
          <Code language="css">{`/* Containers */
body > header,
body > main,
body > footer {
  ...
}`}</Code>
          <p>下面两个页面显示效果相同：</p>
          <Code>{`<!-- With pico.min.css -->
<body>
  <main class="container">
    <h1>Hello, world!</h1>
  </main>
</body>`}</Code>
          <Code>{`<!-- With pico.classless.min.css -->
<body>
  <main>
    <h1>Hello, world!</h1>
  </main>
</body>`}</Code>
          <p>
            See the <Link to="/docs/version-picker">version picker</Link> to easily select the ideal
            Pico CSS version variant to match your project's needs.
          </p>{" "}
        </section>

        <section ref={usageRef}>
          <Heading level={2} anchor="usage">
            用法
          </Heading>
          <p>
            如果你需要居中视口内容就使用默认的 <code>.classless</code> 版本：
          </p>
          <Code className="small">{`<link rel="stylesheet" href="css/pico.classless.min.css">`}</Code>

          <p>
            如果你需要流容器就使用 <code>.fluid.classless</code> 版本：
          </p>
          <Code className="small">{`<link rel="stylesheet" href="css/pico.fluid.classless.min.css">`}</Code>

          <p>
            <code>.classless</code> 版本也可以在 <a href={cdnBaseUrl}>jsDelivr CDN</a> 在线使用：
          </p>
          <Code>{`<!-- Centered viewport -->
<link
  rel="stylesheet"
  href="${cdnBaseUrl}css/pico.classless.min.css"
>`}</Code>
          <Code>{`<!-- Fluid viewport -->
<link
  rel="stylesheet"
  href="${cdnBaseUrl}css/pico.fluid.classless.min.css"
>`}</Code>
        </section>

        <section ref={rootContainerRef}>
          <Heading level={2} anchor="root-container">
            根容器
          </Heading>
          <p>
            如果需要定制 <Code display="inline">{`<header>`}</Code>、
            <Code display="inline">{`<main>`}</Code>和<Code display="inline">{`<footer>`}</Code>
            的根容器，可以用另一个 CSS 选择器来编译 Pico。
          </p>

          <p>
            这对 <a href="https://reactjs.org/">React</a>、{" "}
            <a href="https://www.gatsbyjs.com/">Gatsby</a> 和{" "}
            <a href="https://nextjs.org/">Next.js</a> 很有用。
          </p>
          <Code language="scss">{`/* Custom Class-less version for React */
@use "pico" with (
  
  // Define the root element used to target <header>, <main>, <footer>
  // with $enable-semantic-container and $enable-responsive-spacings
  $semantic-root-element: "#root";
  
  // Enable <header>, <main>, <footer> inside $semantic-root-element as containers
  $enable-semantic-container: true;

  // Enable .classes
  $enable-classes: false;
)`}</Code>

          <p>上面代码编译 Pico 的容器如同：</p>
          <Code language="css">{`/* Containers */
#root > header,
#root > main,
#root > footer {
  ...
}`}</Code>
          <p>
            学习更多 <Link to="/docs/sass">用 SASS 编译定制 Pico 版本</Link> 知识。
          </p>
        </section>

        {/* Edit on GitHub */}
        <EditOnGithub file="docs.classless.jsx" />
      </Content>
    </>
  );
}
