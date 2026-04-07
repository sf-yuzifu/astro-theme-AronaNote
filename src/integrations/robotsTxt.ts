import type { AstroIntegration } from "astro";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

interface RobotsTxtOptions {
  siteUrl: string;
}

export function robotsTxtIntegration(
  options: RobotsTxtOptions,
): AstroIntegration {
  return {
    name: "robots-txt",
    hooks: {
      "astro:build:done": ({ dir }) => {
        const robotsTxtContent = `User-agent: *
Allow: /

Sitemap: ${options.siteUrl}/sitemap-index.xml
`;

        const outputDir = fileURLToPath(dir);
        const outputPath = path.join(outputDir, "robots.txt");
        fs.writeFileSync(outputPath, robotsTxtContent, "utf-8");

        console.log(`[robots-txt] Generated robots.txt at ${outputPath}`);
      },
    },
  };
}
