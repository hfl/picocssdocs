import { createContext, useContext, useState } from "react";

const VersionPickerContext = createContext({});
const useVersionPicker = () => useContext(VersionPickerContext);

const VersionPickerProvider = ({ children, value }) => {
  const { themeRef, customizationRef, usageFromCdnRef, usageWithSaasRef, starterHtmlTemplateRef } =
    value;
  const [baseIndex, setBaseIndex] = useState(0);
  const [conditionalIndex, setConditionalIndex] = useState(0);
  const [themeColor, setThemeColor] = useState("azure");

  const baseConfiguration = [
    {
      name: "常规版本——有类",
      filePattern: "",
      description: "默认 Pico CSS 样式——具备所有组件和类。",
      sassProperties: {},
    },
    {
      name: "无类版本——具有居中视口功能",
      filePattern: "classless.",
      description: `<a href="/docs/classless">无类版本</a>为纯粹 HTML 者打造，具有视口居中功能。`,
      sassProperties: {
        "$enable-semantic-container": true,
        "$enable-classes": false,
      },
    },
    {
      name: "无类视口流版本",
      filePattern: "fluid.classless.",
      description: `<a href="/docs/classless">无类版本</a>为纯粹 HTML 者打造的具有视口流排版功能。`,
      sassProperties: {
        "$enable-semantic-container": true,
        "$enable-viewport": false,
        "$enable-classes": false,
      },
    },
  ];

  const conditionalConfiguration = [
    {
      name: "No",
      filePattern: "",
      description: "默认版本——为每个 HTML 元素都应用了 Pico 样式。",
      sassProperties: {},
    },
    {
      name: "Yes",
      filePattern: "conditional.",
      description: `此版本限制使用 Pico 样式，只有在应用了 <code>.pico</code> 的 HTML 元素内部才起作用。<a href="/docs/conditional">详细内容查看这里</a>。`,
      sassProperties: {
        "$parent-selector": `".pico"`,
      },
    },
  ];

  const colorFilePattern = themeColor === "azure" ? "" : `${themeColor}.`;

  const picoFileName = `pico.${baseConfiguration[baseIndex].filePattern}${conditionalConfiguration[conditionalIndex].filePattern}${colorFilePattern}min.css`;
  const simplifiedCssLink = `<link rel="stylesheet" href="css/${picoFileName}" />`;

  return (
    <VersionPickerContext.Provider
      value={{
        themeRef,
        customizationRef,
        usageFromCdnRef,
        usageWithSaasRef,
        starterHtmlTemplateRef,
        baseIndex,
        baseConfiguration,
        conditionalIndex,
        conditionalConfiguration,
        setBaseIndex,
        setConditionalIndex,
        picoFileName,
        simplifiedCssLink,
        themeColor,
        setThemeColor,
      }}
    >
      {children}
    </VersionPickerContext.Provider>
  );
};

export { useVersionPicker, VersionPickerProvider };
