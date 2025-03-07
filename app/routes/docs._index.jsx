import { useRef } from "react";
import Code from "~/components/Code";
import Heading from "~/components/Heading";
import Link from "~/components/Link";
import Content from "~/components/docs/Content";
import EditOnGithub from "~/components/docs/EditOnGithub";
import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import metaData from "~/data/meta";

const { titleSuffix, cdnBaseUrl } = metaData;

export const meta = () => [
  { title: `Documentation ${titleSuffix}` },
  {
    name: "description",
    content:
      "Link Pico.css manually or via CDN for a dependency-free setup, or use NPM or Composer for advanced usage.",
  },
];

export default function QuickStart() {
  const installManuallyRef = useRef();
  const installFromCdnRef = useRef();
  const installWithNpmRef = useRef();
  const installWithComposerRef = useRef();
  const starterHtmlTemplateRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="快速上手"
        description={
          <>
            手动拷贝 <code>pico.css</code> 到本地或者通过 CDN 引用，或者使用 NPM 或 Composer
            定制使用。
          </>
        }
      />

      {/* Table of content */}
      <TableOfContents
        data={[
          {
            anchor: "install-manually",
            title: "手动安装",
            ref: installManuallyRef,
          },
          {
            anchor: "usage-from-cdn",
            title: "从 CDN 引用",
            ref: installFromCdnRef,
          },
          {
            anchor: "install-with-npm",
            title: "通过 NPM 安装",
            ref: installWithNpmRef,
          },
          {
            anchor: "install-with-composer",
            title: "通过 Composer 安装",
            ref: installWithComposerRef,
          },
          {
            anchor: "starter-html-template",
            title: "起步 HTML 模板",
            ref: starterHtmlTemplateRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section ref={installManuallyRef}>
          <p>有四种方式使用 pico.css 起步：</p>
          <Heading level={2} anchor="install-manually">
            手动安装
          </Heading>
          <p>
            <Link to="https://github.com/picocss/pico/archive/refs/heads/main.zip">下载 Pico</Link>{" "}
            然后在站点的 <Code display="inline">{`<head>`}</Code> 中链接到{" "}
            <code>/css/pico.min.css</code>。
          </p>
          <Code className="small">{`<link rel="stylesheet" href="css/pico.min.css">`}</Code>
        </section>

        <section ref={installFromCdnRef}>
          <Heading level={2} anchor="usage-from-cdn">
            通过 CDN 引用
          </Heading>
          <p>
            下载的替代方法是可以通过使用 <Link to={cdnBaseUrl}>jsDelivr CDN</Link> 托管网站链接到
            <code>pico.min.css</code>。
          </p>
          <Code>{`<link
  rel="stylesheet"
  href="${cdnBaseUrl}css/pico.min.css"
>`}</Code>
        </section>

        <section ref={installWithNpmRef}>
          <Heading level={2} anchor="install-with-npm">
            通过 NPM 安装
          </Heading>
          <Code language="bash" className="small">
            npm install @picocss/pico
          </Code>
          <p>或者</p>
          <Code language="bash" className="small">
            yarn add @picocss/pico
          </Code>
          <p>
            然后，用
            <Link to="https://sass-lang.com/documentation/at-rules/use">@use</Link>
            引入 Pico 到你的 SCSS 文件中：
          </p>
          <Code language="scss" className="small">
            @use "pico";
          </Code>
          <p>
            有关内容可以了解<Link to="/docs/sass">通过 Sass 定制</Link>。
          </p>
        </section>

        <section ref={installWithComposerRef}>
          <Heading level={2} anchor="install-with-composer">
            通过 Composer 安装
          </Heading>
          <Code language="bash" className="small">
            composer require picocss/pico
          </Code>
        </section>

        <section ref={starterHtmlTemplateRef}>
          <Heading level={2} anchor="starter-html-template">
            起步 HTML 模板
          </Heading>
          <Code>{`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light dark">
    <link rel="stylesheet" href="css/pico.min.css">
    <title>Hello world!</title>
  </head>
  <body>
    <main class="container">
      <h1>Hello world!</h1>
    </main>
  </body>
</html>`}</Code>
        </section>

        {/* Edit on GitHub */}
        <EditOnGithub file="docs._index.jsx" />
      </Content>
    </>
  );
}
