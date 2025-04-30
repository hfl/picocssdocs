import { useRef } from "react";
import Code from "~/components/Code";
import Heading from "~/components/Heading";
import Link from "~/components/Link";
import Content from "~/components/docs/Content";
import EditOnGithub from "~/components/docs/EditOnGithub";
import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import colorsCssVars from "~/data/code-snippets/default-theme-color-schemes.txt";
import stylesCssVars from "~/data/code-snippets/default-theme-styles.txt";
import orangeCssCode from "~/data/code-snippets/orange.txt";
import metaData from "~/data/meta";
import { removeLines } from "~/utils";

const { titleSuffix } = metaData;

export const meta = () => [
  { title: `CSS 变量 ${titleSuffix}` },
  {
    name: "description",
    content: "Pico 定制设计系统——用 130 多个 CSS 变量创建一个独立无二的外观。",
  },
];

export function links() {
  return [
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Pacifico&display=swap" },
  ];
}

export default function CssVariables() {
  const introductionRef = useRef();
  const exampleRef = useRef();
  const cssVariablesForColorSchemesRef = useRef();
  const allCssVariablesRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="CSS 变量"
        description="Pico 定制设计系统——用 130 多个 CSS 变量创建一个独立无二的外观。"
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
            anchor: "example",
            title: "范例",
            ref: exampleRef,
          },
          {
            anchor: "css-variables-for-color-schemes",
            title: "配色方案",
            ref: cssVariablesForColorSchemesRef,
          },
          {
            anchor: "all-css-variables",
            title: "所有 CSS 变量",
            ref: allCssVariablesRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section ref={introductionRef}>
          <p>
            Pico 包含一些定制属性（变量）—— 易定制的常用值，例如 <code>font-family</code>、
            <code>font-size</code>、<code>border-radius</code>、<code>margin</code>、{" "}
            <code>padding</code>等等。
          </p>
          <p>
            所有 CSS 变量都冠以 <code>pico-</code> 前缀，这样就可以避免同其它 CSS
            框架或你自己的变量冲突。你可以用 <Link to="/docs/sass">SASS</Link>编译 CSS
            文件时删除或者定制这个前缀。
          </p>
          <p>
            你可以在 <code>:root</code> 选择器内定义 CSS
            变量以便在全局应用修改或者针对特定选择器覆盖 CSS 变量来在地应用修改。
          </p>
        </section>

        <section ref={exampleRef}>
          <Heading level={2} anchor="example">
            范例
          </Heading>
          <article aria-label="Button colors example" className="component" id="css-var-example">
            <style>{`
              #css-var-example h1,
              #css-var-example p,
              #css-var-example button {
                --pico-border-radius: 2rem;
                --pico-typography-spacing-vertical: 1.5rem;
                --pico-form-element-spacing-vertical: 1rem;
                --pico-form-element-spacing-horizontal: 1.5rem;
              }
              #css-var-example h1 {
                --pico-font-family: Pacifico, cursive;
                --pico-font-weight: 400;
                --pico-typography-spacing-vertical: 0.5rem;
              }
              #css-var-example button {
                --pico-font-weight: 700;
                margin-bottom: 0;
              }
            `}</style>
            <h1>Music fest mania</h1>
            <p>
              Get ready to dance and sing your heart out at our Music Fest Mania. Join the crowd,
              jam to your favorite band, and discover new artists.
            </p>
            <button>Let’s rock out!</button>

            <Code as="footer">{`<style>
  :root {
    --pico-border-radius: 2rem;
    --pico-typography-spacing-vertical: 1.5rem;
    --pico-form-element-spacing-vertical: 1rem;
    --pico-form-element-spacing-horizontal: 1.25rem;
  }
  h1 {
    --pico-font-family: Pacifico, cursive;
    --pico-font-weight: 400;
    --pico-typography-spacing-vertical: 0.5rem;
  }
  button {
    --pico-font-weight: 700;
  }
</style>

<h1>Music fest mania</h1>
<p>
  Get ready to dance and sing your heart out at 
  our Music Fest Mania. Join the crowd, jam to
  your favorite band, and discover new artists.
</p>
<button>Let's rock out!</button>
`}</Code>
          </article>
        </section>

        <section ref={cssVariablesForColorSchemesRef}>
          <Heading level={2} anchor="css-variables-for-color-schemes">
            基于配色方案的 CSS 变量
          </Heading>
          <p>添加或者编辑亮色模式下的 CSS 变量（默认模式），像下面这样：</p>
          <Code language="css">{`/* Light color scheme (Default) */
/* Can be forced with data-theme="light" */
[data-theme="light"],
:root:not([data-theme="dark"]) {
 ...
}`}</Code>
          <p>添加或编辑暗色模式的 CSS 变量，你需要定义它们两次。</p>
          <p>
            The first inclusion is in the <code>{`@media`}</code>query that checks if the user has
            dark mode enabled through their device settings with{" "}
            <code>{`prefers-color-scheme:
            dark`}</code>
            . In this case, the dark mode styling is applied to the <code>{`:root`}</code> element
            if there is no explicit <code>{`data-theme`}</code> attribute set.
          </p>

          <p>
            The second inclusion is when you force the dark mode with{" "}
            <code>{`data-theme="dark"`}</code>. This allows you to manually toggle between the light
            and dark themes regardless of the user’s device settings.
          </p>
          <Code language="css">{`/* Dark color scheme (Auto) */
/* Automatically enabled if user has Dark mode enabled */
 @media only screen and (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    ...
  }
}

/* Dark color scheme (Forced) */
/* Enabled if forced with data-theme="dark" */
[data-theme="dark"] {
  ...
}`}</Code>
          <details>
            <summary role="button" className="secondary">
              Detailed example to override the primary color
            </summary>
            <Code language="css">
              {removeLines({
                code: orangeCssCode,
                linesMatching: [
                  "  --pico-switch-thumb-box-shadow: 0 0 0 rgba(0, 0, 0, 0);",
                  "    --pico-switch-thumb-box-shadow: 0 0 0 rgba(0, 0, 0, 0);",
                ],
                linesToRemoveFromEnd: 2,
              })}
            </Code>
          </details>
        </section>

        <section ref={allCssVariablesRef}>
          <Heading level={2} anchor="all-css-variables">
            所有 CSS 变量
          </Heading>
          <p>共有两类 CSS 变量：</p>
          <ol>
            <li>
              <strong>样式变量</strong>——不依赖配色方案；
            </li>
            <li>
              <strong>Color 变量</strong>——依赖配色方案。
            </li>
          </ol>
          <p style={{ marginBottom: "2rem" }}>这是所有 Pico 的 CSS 变量：</p>
          <details>
            <summary role="button" className="secondary">
              默认样式的 CSS 变量
            </summary>
            <Code language="css">
              {removeLines({
                code: stylesCssVars,
                linesToRemoveFromStart: 3,
                linesToRemoveFromEnd: 2,
              })}
            </Code>
          </details>
          <details>
            <summary role="button" className="secondary">
              默认颜色的 CSS 变量
            </summary>
            <Code language="css">
              {removeLines({
                code: colorsCssVars,
                linesToRemoveFromStart: 3,
                linesToRemoveFromEnd: 2,
              })}
            </Code>
          </details>
        </section>

        {/* Edit on GitHub */}
        <EditOnGithub file="docs.css-variables.jsx" />
      </Content>
    </>
  );
}
