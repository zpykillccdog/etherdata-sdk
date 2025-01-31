import { TypescriptGenerator } from "./sdk-generator/generators/typescript_generator";
import { ReactUIGenerator } from "./sdk-generator/generators/react_ui_generator";
import { KotlinGenerator } from "./sdk-generator/generators/kotlin_generator";

let filePaths = [
  "../../../sdk/admin.yml",
  "../../../sdk/clique.yml",
  "../../../sdk/debug.yml",
  "../../../sdk/etd.yml",
  "../../../sdk/personal.yml",
  "../../../sdk/real-time.yml",
  "../../../sdk/txpool.yml",
  "../../../sdk/json_rpc.yml",
  "../../../sdk/json_rpc_methods.yml",
  "../../../sdk/miner.yml",
];

let outputPaths = [
  "../../../sdk-dist/typescript/lib",
  "../../../sdk-dist/etd-react-ui/src",
  "../../../sdk-dist/kotlin/src/main/kotlin/com/etd",
];

let generators = [
  new TypescriptGenerator(),
  new ReactUIGenerator(),
  new KotlinGenerator(),
];

(async () => {
  let index = 0;
  for (let generator of generators) {
    await generator.read(filePaths).toCode(outputPaths[index]);
    index += 1;
  }
})();
