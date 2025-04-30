import { Outlet } from "@remix-run/react";
import { useRef } from "react";
import Content from "~/components/docs/Content";
import EditOnGithub from "~/components/docs/EditOnGithub";
import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import Customization from "~/components/docs/VersionPickerCustomization";
import Usage from "~/components/docs/VersionPickerUsage";
import { VersionPickerProvider } from "~/contexts/VersionPickerContext";
import metaData from "~/data/meta";
import colorPickerStyles from "~/styles/css/docs/color-picker.css";

const { titleSuffix } = metaData;

export const meta = () => [
  { title: `版本选择 ${titleSuffix}` },
  {
    name: "description",
    content: "轻松选择理想的 Pico CSS 版本匹配你的项目需要。",
  },
];

export function links() {
  return [{ rel: "stylesheet", href: colorPickerStyles }];
}

export default function VersionPicker() {
  const themeRef = useRef();
  const customizationRef = useRef();
  const usageFromCdnRef = useRef();
  const usageWithSaasRef = useRef();
  const starterHtmlTemplateRef = useRef();

  return (
    <>
      {/* Header */}
      <Header title="版本选择" description="轻松选择理想的 Pico CSS 版本匹配你的项目需要。" />

      {/* Table of content */}
      <TableOfContents
        data={[
          {
            anchor: "",
            title: "主题",
            ref: themeRef,
          },
          {
            anchor: "configuration",
            title: "配置",
            ref: customizationRef,
          },
          {
            anchor: "usage-from-cdn",
            title: "从 CDN 引用",
            ref: usageFromCdnRef,
          },
          {
            anchor: "usage-with-sass",
            title: "基于 Sass 使用",
            ref: usageWithSaasRef,
          },
          {
            anchor: "starter-html-template",
            title: "HTML 起步模板",
            ref: starterHtmlTemplateRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <VersionPickerProvider
          value={{
            themeRef,
            customizationRef,
            usageFromCdnRef,
            usageWithSaasRef,
            starterHtmlTemplateRef,
          }}
        >
          <Outlet />
          <Customization />
          <Usage />

          {/* Edit on GitHub */}
          <EditOnGithub file="docs.version-picker.jsx" />
        </VersionPickerProvider>
      </Content>
    </>
  );
}
