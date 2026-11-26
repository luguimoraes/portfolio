// Barra valores soltos nos componentes: cores em hex/rgb/hsl e valores
// arbitrários do Tailwind (ex.: w-[37px], text-[#333]). Tudo deve vir de
// src/design/tokens.css. Rode com: npm run design:check
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOTS = ["src/app", "src/components"];
const EXT = /\.(tsx?|jsx?)$/;
const RULES = [
  { name: "cor hex solta", re: /#[0-9a-fA-F]{3,8}\b/ },
  { name: "cor rgb/hsl solta", re: /\b(rgba?|hsla?|oklch)\(/ },
  { name: "valor arbitrário do Tailwind", re: /\b[a-z-]+-\[[^\]]+\]/ },
  { name: "estilo inline", re: /\bstyle=\{\{/ },
];

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : EXT.test(name) ? [path] : [];
  });
}

const problems = [];
for (const file of ROOTS.flatMap(walk)) {
  readFileSync(file, "utf8")
    .split("\n")
    .forEach((line, i) => {
      for (const rule of RULES) {
        if (rule.re.test(line)) {
          problems.push(`${relative(".", file)}:${i + 1}  ${rule.name}: ${line.trim()}`);
        }
      }
    });
}

if (problems.length) {
  console.error(`design:check encontrou ${problems.length} valor(es) fora dos tokens:\n`);
  console.error(problems.join("\n"));
  process.exit(1);
}
console.log("design:check ok: nenhum valor solto fora dos tokens.");
