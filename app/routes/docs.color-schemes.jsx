import { useRef } from "react";
import Code from "~/components/Code";
import Heading from "~/components/Heading";
import Content from "~/components/docs/Content";
import EditOnGithub from "~/components/docs/EditOnGithub";
import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import ThemeToggle from "~/components/icons/ThemeToggle";
import { usePage } from "~/contexts/PageContext";
import metaData from "~/data/meta";

const { titleSuffix } = metaData;

export const meta = () => [
  { title: `Color schemes ${titleSuffix}` },
  {
    name: "description",
    content:
      "Pico CSS comes with both Light and Dark color schemes, automatically enabled based on user preferences.",
  },
];

export default function ColorSchemes() {
  const { pageTheme, switchTheme } = usePage();
  const isThemeDark = pageTheme === "dark";
  const changeThemeLabel = isThemeDark ? "关闭暗色模式" : "开启暗色模式";
  const introductionRef = useRef();
  const usageRef = useRef();
  const exampleRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="色系"
        description="Pico CSS 自带两种色系——亮色（Light）和暗色（Dark），自动启用用户配置。"
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
            anchor: "usage",
            title: "用法",
            ref: usageRef,
          },
          {
            anchor: "example",
            title: "Card 范例",
            ref: exampleRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section ref={introductionRef}>
          <p>
            默认色彩方案为亮色（Light）色系。如果用户使用{" "}
            <Code display="inline" language="css">{`prefers-color-scheme: dark;`}</Code>
            启用暗色（Dark）色系，则该色系自动启用。
          </p>
          <article aria-label="Theme switcher" id="theme-switcher">
            <button className="contrast" onClick={switchTheme}>
              <ThemeToggle className={`theme-toggle${isThemeDark ? " moon" : ""}`} />
              {changeThemeLabel}
            </button>
          </article>
        </section>
        <section ref={usageRef}>
          <Heading level={2} anchor="usage">
            用法
          </Heading>
          <p>
            色系可以为整个文档使用 <Code display="inline">{`<html data-theme="light">`}</Code>{" "}
            定义或者为特定 HTML 元素 使用类似于{" "}
            <Code display="inline">{`<article data-theme="dark">`}</Code> 的方法定义。
          </p>
          <p>
            色系对于 HTML 标签级元素如 <code>a</code>， <code>button</code>，<code>table</code>，
            <code>input</code>，<code>textarea</code>， <code>select</code>，<code>article</code>，
            <code>dialog</code>，<code>progress</code>也能正常使用。
          </p>
          <p>
            CSS variables specific to the color scheme are assigned to every HTML tag. However, we
            have not enforced specific background and color settings across all HTML tags to
            maintain transparent backgrounds and ensure colors are inherited from the parent tag.
          </p>
          <p>
            For some other HTML tags, you might need to explicitly set <code>background-color</code>{" "}
            and <code>color</code>.
          </p>
          <Code language="css">{`section {
  background-color: var(--pico-background-color);
  color: var(--pico-color);
}`}</Code>
        </section>
        <section ref={exampleRef}>
          <Heading level={2} anchor="example">
            Card 范例
          </Heading>

          <article data-theme="light" aria-label="Forced light theme example">
            <Heading level={2}>Light card</Heading>
            <form>
              <fieldset className="grid">
                <input
                  type="text"
                  name="login"
                  placeholder="Login"
                  aria-label="Login"
                  autoComplete="username"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  aria-label="Password"
                  autoComplete="current-password"
                />
                <button type="submit" onClick={(event) => event.preventDefault()}>
                  Login
                </button>
              </fieldset>
              <fieldset>
                <label>
                  <input type="checkbox" role="switch" name="switch" defaultChecked={true} />{" "}
                  Remember me
                </label>
              </fieldset>
            </form>
            <Code as="footer" dataTheme="light">{`<article data-theme="light">
  ...
</article>`}</Code>
          </article>

          <article data-theme="dark" aria-label="Forced dark theme example">
            <Heading level={2}>Dark card</Heading>
            <form>
              <fieldset className="grid">
                <input
                  type="text"
                  name="login"
                  placeholder="Login"
                  aria-label="Login"
                  autoComplete="username"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  aria-label="Password"
                  autoComplete="current-password"
                />
                <button type="submit" onClick={(event) => event.preventDefault()}>
                  Login
                </button>
              </fieldset>
              <fieldset>
                <label>
                  <input type="checkbox" role="switch" name="switch" defaultChecked={true} />{" "}
                  Remember me
                </label>
              </fieldset>
            </form>
            <Code as="footer">{`<article data-theme="dark">
  ...
</article>`}</Code>
          </article>
        </section>

        {/* Edit on GitHub */}
        <EditOnGithub file="docs.color-schemes.jsx" />
      </Content>
    </>
  );
}
