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

export const meta = () => [
  {
    title: `
  条件样式 ${titleSuffix}`,
  },
  {
    name: "description",
    content: "选择性的通过在一个包裹元素的容器上应用 .pico 样式，完美的融入Pico CSS 样式。",
  },
];

export default function Conditional() {
  const conditionalExample = examples.find((example) => example.title === "Conditional styling");
  const introductionRef = useRef();
  const installManuallyRef = useRef();
  const installFromCdnRef = useRef();
  const usageWithSaasRef = useRef();
  const starterHtmlTemplateRef = useRef();
  const examplesRef = useRef();
  const demoRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="条件样式"
        description={
          <>
            选择性的通过在一个包裹元素的容器上应用 <code>.pico</code> 样式，完美的融入Pico CSS
            样式。
          </>
        }
      />

      {/* Table of content */}
      <TableOfContents
        data={[
          {
            anchor: "",
            title: "简介",
            ref: introductionRef,
          },
          {
            anchor: "local-setup",
            title: "手动安装",
            ref: installManuallyRef,
          },
          {
            anchor: "usage-from-cdn",
            title: "从 CDN 在线使用",
            ref: installFromCdnRef,
          },
          {
            anchor: "usage-with-sass",
            title: "利用 Sass 使用",
            ref: usageWithSaasRef,
          },
          {
            anchor: "starter-html-template",
            title: "起步 HTML 模板",
            ref: starterHtmlTemplateRef,
          },
          {
            anchor: "examples",
            title: "范例",
            ref: examplesRef,
          },
          {
            anchor: "demo",
            title: "演示",
            ref: demoRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        {/* Introduction */}
        <section ref={introductionRef}>
          <p>
            Pico 提供一个 <code>.conditional</code> 版本——通过在元素上使用 <code>.pico</code>{" "}
            类做为容器来限制样式的使用。
          </p>
          <p>
            保留最小化的 <code>:root</code> 重置以确保整个网站的一致性。
          </p>
          <p>
            查看 <Link to="/docs/version-picker">版本选择</Link> 以方便根据你的项目需求选择合适的
            Pico CSS 版本。
          </p>
        </section>

        {/* Install manually */}
        <section ref={installManuallyRef}>
          <Heading level={2} anchor="local-setup">
            手动安装
          </Heading>
          <p>
            <Link to="https://github.com/picocss/pico/archive/refs/heads/v2.zip">下载 Pico</Link>{" "}
            ，然后在你的站点的 <Code display="inline">{`<head>`}</Code>
            部分链接样式表文件 <code>/css/pico.conditional.min.css</code>
          </p>
          <Code className="small">{`<link rel="stylesheet" href="css/pico.conditional.min.css">`}</Code>
        </section>

        {/* Usage from CDN */}
        <section ref={installFromCdnRef}>
          <Heading level={2} anchor="usage-from-cdn">
            从 CDN 在线使用
          </Heading>
          <p>
            当然，你也可以使用 <Link to={cdnBaseUrl}>jsDelivr CDN</Link> 站点资源直接添加链接到
            <code>pico.conditional.min.css</code> 文件。
          </p>
          <Code>{`<link
  rel="stylesheet"
  href="${cdnBaseUrl}css/pico.conditional.min.css">`}</Code>
        </section>

        {/* Usage with Sass */}
        <section ref={usageWithSaasRef}>
          <Heading level={2} anchor="usage-with-sass">
            利用 Sass 使用
          </Heading>
          <Code language="scss">{`@use "pico" with (
  $parent-selector: ".pico"
);`}</Code>
        </section>

        {/* Starter HTML template */}
        <section ref={starterHtmlTemplateRef}>
          <Heading level={2} anchor="starter-html-template">
            起步 HTML 模板
          </Heading>
          <Code>{`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light dark" />
    <link rel="stylesheet" href="css/pico.conditional.min.css">
    <title>Hello world!</title>
  </head>
  <body>
    <main>
      <section>
        <p>Unstyled hello world!</p>
      </section>
      <section class="pico">
        <p>Styled hello world!</p>
      </section>
    </main>
  </body>
</html>`}</Code>
        </section>

        {/* Examples */}
        <section ref={examplesRef}>
          <Heading level={2} anchor="examples">
            范例
          </Heading>
          <p>使用 Pico 样式范例：</p>
          <article aria-label="Styled example" className="component">
            <form>
              <input type="text" name="text" placeholder="Text" aria-label="Text" />
            </form>
            <Code as="footer">{`<form class="pico">
  <input type="text" name="text" placeholder="Text" aria-label="Text" />
</form>`}</Code>
          </article>
          <p>不使用 Pico 样式范例：</p>
          <article aria-label="Unstyled example" className="component">
            <form>
              <input
                type="text"
                name="text"
                placeholder="Text"
                aria-label="Text"
                style={{ all: "revert" }}
              />
            </form>
            <Code as="footer">{`<form>
  <input type="text" name="text" placeholder="Text" aria-label="Text" />
</form>`}</Code>
          </article>
        </section>

        {/* Demo */}
        <section ref={demoRef}>
          <Heading level={2} anchor="demo">
            演示
          </Heading>
          <ul>
            <li>
              <Link to={conditionalExample.links.preview}>预览</Link>
            </li>
            <li>
              <Link to={conditionalExample.links.editor}>在 CodeSandbox 编辑</Link>
            </li>
            <li>
              <Link to={conditionalExample.links.source}>查看源码</Link>
            </li>
          </ul>
        </section>

        {/* Edit on GitHub */}
        <EditOnGithub file="docs.conditional.jsx" />
      </Content>
    </>
  );
}
