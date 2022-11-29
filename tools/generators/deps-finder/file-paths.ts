import { readdirSync } from "fs";
import { SyntaxKind, ts } from "ts-morph";
import { ImportDeclaration } from "@ts-morph/common/lib/typescript";

const path = require("path");

export const flatAllPaths = (dirName: string): string[] => {
  let files: any[] = [];
  const items = readdirSync(dirName, {withFileTypes: true});

  for (const item of items) {
    if (item.isDirectory()) {
      files = [ ...files, ...flatAllPaths(`${ dirName }/${ item.name }`) ];
    } else {
      if (path.extname(item.name) === `.ts`)
        files.push(`${ dirName }/${ item.name }`);
    }
  }
  return files;
}


export function getSyntaxKindSourceNodes(sourceFile: ts.SourceFile, syntaxKind: SyntaxKind): ts.Node[]{
  const nodes: ts.Node[] = [ sourceFile ];
  const result = [];

  while (nodes.length > 0) {
    const node = nodes.shift();

    if (node) {
      if (node.kind === syntaxKind)
        result.push(node);
      if (node.getChildCount(sourceFile) >= 0) {
        nodes.unshift(...node.getChildren());
      }
    }
  }

  return result;
}


export function filterModuleImports(nodes: ts.Node[]){
  const allImports = new Set<string>();
  nodes.forEach((n: ImportDeclaration) => {
    const t: any = n.moduleSpecifier["text"]
    if (t[0] !== ".") {
      const r = t.split("/")
      if (r.length >= 2) {
        allImports.add(r[0] + "/" + r[1])
      } else {
        allImports.add(t)
      }
    }
  })
  return allImports
}
