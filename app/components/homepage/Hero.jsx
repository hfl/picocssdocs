import Link from "~/components/Link";
import Demo from "~/components/homepage/Demo";
import ArrowRight from "~/components/icons/ArrowRight";

export default function Hero(props) {
  return (
    <section className="hero" {...props}>
      <div className="hook">
        <h1>
          <mark>迷你 CSS&nbsp;框架</mark> <br />
          ——面向语义 HTML
        </h1>
        <p className="secondary">
          一款迷你轻量级起步工具——优先采用语义语法，默认使每一个 HTML 元素都自适应 和优雅展现。
        </p>
        <p>编写 HTML，添加 Pico CSS，然后 Voilà！</p>
        <div className="grid ctas">
          <Link to="/docs" role="button">
            新手上路
            <ArrowRight />
          </Link>
          <Link to="/examples" role="button" className="contrast">
            范例
            <ArrowRight />
          </Link>
        </div>
      </div>
      <Demo />
    </section>
  );
}
