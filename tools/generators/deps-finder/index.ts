import { Tree } from "@nrwl/devkit";
import { filterModuleImports, flatAllPaths, getSyntaxKindSourceNodes } from "./file-paths";
import { SyntaxKind, ts } from "ts-morph";
import * as path from "path";

export default function createPackageJson(tree: Tree, schema: any){
  let projects;

  if (tree.exists("workspace.json")) {
    const fileContent = tree.read("workspace.json")!.toString("utf-8");
    let workspace = JSON.parse(fileContent);
    projects = workspace["projects"];

    if (!projects.hasOwnProperty(schema.project)) {
      console.error(`We can't find project ${ schema.project } in your workspace.json`, projects);
      process.exit(2)
    }
  }

  const projectPath = projects[schema.project]
  const allFiles = flatAllPaths(projectPath)
  let allImports = new Set<string>();

  allFiles.forEach((path) => {
    const sourceText = tree.read(path)!.toString("utf-8");
    const sourceFile = ts.createSourceFile(path, sourceText, ts.ScriptTarget.Latest, true);
    const nodes: ts.Node[] = getSyntaxKindSourceNodes(sourceFile, SyntaxKind.ImportDeclaration);
    allImports = new Set<string>([ ...allImports, ...filterModuleImports(nodes) ])
  })
  const appPackageContent = tree.read(path.join(projectPath, "package.json"))!.toString("utf-8");
  let appPackageJson = JSON.parse(appPackageContent);
  if (!appPackageJson.dependencies) {
    appPackageJson.dependencies = {};
  }

  const rootPackageContent = tree.read(path.join("package.json"))!.toString("utf-8");
  let rootPackageJson = JSON.parse(rootPackageContent);
  const rootDeps = rootPackageJson.dependencies;
  const appDeps = appPackageJson.dependencies;

  allImports.forEach((key) => {
    if (rootDeps[key]) {
      if (appDeps[key] && rootDeps[key] !== appDeps[key]) {
        console.warn(`Versions mismatch: ${key}, ${appDeps[key]}, will be changed to ${rootDeps[key]}`)
      }
      appPackageJson.dependencies[key] = rootDeps[key]
    }
  })
  tree.write(path.join(projectPath, "package.json"), JSON.stringify(appPackageJson, null, "\t"));
  console.log(appPackageJson)
}
