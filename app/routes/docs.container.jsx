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
  { title: `容器（Container） ${titleSuffix}` },
  {
    name: "description",
    content:
      "使用 .container 会得到一个剧中的视口或者使用 .container-fluid 得到一个 full-width 布局。",
  },
];

const breakpoints = [
  {
    key: "xs",
    name: "极小屏",
    breakpoint: "<576px",
    viewport: "100%",
  },
  {
    key: "sm",
    name: "小屏",
    breakpoint: "≥576px",
    viewport: "510px",
  },
  {
    key: "md",
    name: "中屏",
    breakpoint: "≥768px",
    viewport: "700px",
  },
  {
    key: "lg",
    name: "大屏",
    breakpoint: "≥1024px",
    viewport: "950px",
  },
  {
    key: "xl",
    name: "极大屏",
    breakpoint: "≥1280px",
    viewport: "1200px",
  },
  {
    key: "xxl",
    name: "巨屏",
    breakpoint: "≥1536px",
    viewport: "1450px",
  },
];

export default function Container() {
  const breakpointsRef = useRef();
  const fixedRef = useRef();
  const fluidRef = useRef();
  const semanticRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="容器（Container）"
        description={
          <>
            使用 <code>.container</code> 会得到一个居中的视口，或者用 <code>.container-fluid</code>{" "}
            得到一个 full-width&nbsp;布局。
          </>
        }
      />

      {/* Table of content */}
      <TableOfContents
        data={[
          {
            anchor: "",
            title: "断点",
            ref: breakpointsRef,
          },
          {
            anchor: "fixed-width",
            title: "定宽",
            ref: fixedRef,
          },
          {
            anchor: "fluid-width",
            title: "流式宽度",
            ref: fluidRef,
          },
          {
            anchor: "semantic-containers",
            title: "语义容器",
            ref: semanticRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section ref={breakpointsRef}>
          <p>
            Pico 有六个断点。这些断点可以通过 <Link to="/docs/sass">Sass</Link> 定制。
          </p>
          <table className="striped">
            <thead>
              <tr>
                <th>设备</th>
                <th>断点</th>
                <th>视口</th>
              </tr>
            </thead>
            <tbody>
              {breakpoints.map((breakpoint) => (
                <tr key={breakpoint.key}>
                  <td>{breakpoint.name}</td>
                  <td>{breakpoint.breakpoint}</td>
                  <td>{breakpoint.viewport}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            <code>.container</code> 和 <code>.container-fluid</code> 在{" "}
            <Link to="/docs/classless">无类版本</Link> （查看{" "}
            <Link to="#semantic-containers">语义容器</Link>）不可用。
          </p>
        </section>

        <section ref={fixedRef}>
          <Heading level={2} anchor="fixed-width">
            定宽
          </Heading>
          <p>
            <code>.container</code> 提供居中定宽容器。
          </p>
          <Code>{`<body>
  <main class="container">
    ...
  </main>
</body>`}</Code>
        </section>

        <section ref={fluidRef}>
          <Heading level={2} anchor="fluid-width">
            流体宽度
          </Heading>
          <p>
            <code>.container-fluid</code> 提供了满屏宽度容器。
          </p>
          <Code>{`<body>
  <main class="container-fluid">
    ...
  </main>
</body>`}</Code>
        </section>

        <section ref={semanticRef}>
          <Heading level={2} anchor="semantic-containers">
            语义容器
          </Heading>
          <p>
            在无类版本里，<Code display="inline">{`<body>`}</Code>内的
            <Code display="inline">{`<header>`}</Code>、 <Code display="inline">{`<main>`}</Code> 和{" "}
            <Code display="inline">{`<footer>`}</Code> 做为容器定义了居中或者流体的视口。
          </p>
          <p>
            查看 <Link to="/docs/classless">无类版本</Link>。
          </p>
        </section>

        {/* Edit on GitHub */}
        <EditOnGithub file="docs.container.jsx" />
      </Content>
    </>
  );
}
