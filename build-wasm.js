import { spawn } from "child_process";

const wasmDir = "wasm-module";
const outputDir = "src/wasm";

console.log("Building WASM module...");

// Check if wasm-pack is installed
const wasmPack = spawn("wasm-pack", ["--version"], { stdio: "pipe" });

wasmPack.on("error", (err) => {
  console.error("wasm-pack is not installed. Please install it with:");
  console.error(
    "curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh"
  );
  process.exit(1);
});

wasmPack.on("close", (code) => {
  if (code === 0) {
    // wasm-pack is installed, proceed with build
    const buildProcess = spawn(
      "wasm-pack",
      [
        "build",
        wasmDir,
        "--target",
        "web",
        "--out-dir",
        `../${outputDir}`,
        "--dev",
      ],
      { stdio: "inherit" }
    );

    buildProcess.on("close", (buildCode) => {
      if (buildCode === 0) {
        console.log("✅ WASM module built successfully!");
      } else {
        console.error("❌ Failed to build WASM module");
        process.exit(1);
      }
    });
  }
});
