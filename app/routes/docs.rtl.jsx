import Code from "~/components/Code";
import Content from "~/components/docs/Content";
import EditOnGithub from "~/components/docs/EditOnGithub";
import Header from "~/components/docs/Header";
import metaData from "~/data/meta";

const { titleSuffix } = metaData;

export const meta = () => [
  { title: `RTL (Right-To-Left) ${titleSuffix}` },
  {
    name: "description",
    content: "支持从右到左方向文本。",
  },
];

export default function Rtl() {
  return (
    <>
      {/* Header */}
      <Header title="RTL" description="支持从右到左方向文本。" />

      {/* Content */}
      <Content>
        <section>
          <p>
            Pico 启用 RTL (Right-To-Left)，需要在 <Code display="inline">{`<html>`}</Code>{" "}
            元素中设置 <code>dir="rtl"</code>。
          </p>
          <Code>{`<!doctype html>
<html dir="rtl" lang="ar">
  ...
</html>`}</Code>

          <p>RTL 也可以在单独的元素中设置：</p>
          <article aria-label="RTL example" className="component">
            <blockquote dir="rtl" lang="ar">
              “كُنْ كالطير، الذي إذا اعتاد القفز على الأغصان لا يحس بالخطر وليس في ذلك أي تردد،
              ولكنه لو فقد الثقة بجناحيه فإنه يسقط أرضًا. كذلك، إذا اعتاد الإنسان على العمل الصالح
              فإنه يستطيع فعله بلا جهد وليس في ذلك أي عناء، ولكنه إذا فقد الثقة بنفسه فإنه يفشل.”
              <footer>
                <cite>— خليل جبران</cite>
              </footer>
            </blockquote>
            <Code as="footer">{`<blockquote dir="rtl" lang="ar">
  “كُنْ كالطير، الذي إذا اعتاد القفز على الأغصان لا يحس بالخطر وليس في ذلك أي تردد،
  ولكنه لو فقد الثقة بجناحيه فإنه يسقط أرضًا. كذلك، إذا اعتاد الإنسان على العمل الصالح
  فإنه يستطيع فعله بلا جهد وليس في ذلك أي عناء، ولكنه إذا فقد الثقة بنفسه فإنه يفشل.”
  <footer>
    <cite>— خليل جبران</cite>
  </footer>
</blockquote>`}</Code>
          </article>
        </section>

        {/* Edit on GitHub */}
        <EditOnGithub file="docs.rtl.jsx" />
      </Content>
    </>
  );
}
