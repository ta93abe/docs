import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Docs</span>,
  project: {
    link: "https://github.com/ta93abe/docs",
  },
  docsRepositoryBase: "https://github.com/ta93abe/docs/tree/main",
  editLink: {
    text: "",
  },
  navigation: false,
  feedback: {
    content: () => <> Question? Give me feedback →</>,
    labels: "feedback",
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – ta93abe'
    }
  },
  primaryHue: 279,
  i18n: [
    { locale: "en", text: "English" },
    { locale: "ja", text: "日本語" },
  ],
  footer: {
    text: () => {
      return (
        <div>
          <p className="mt-6 text-xs">
            &copy; 2022 <a href="https://ta93a.be">ta93abe</a>
          </p>
        </div>
      );
    },
  },
};

export default config;
