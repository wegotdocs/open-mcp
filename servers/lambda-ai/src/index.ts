#!/usr/bin/env node

import("./server.js").then((module) => {
  const args = process.argv.slice(2)
  const toolsArg = args.find((arg) => arg.startsWith("--tools="))

  let toolNames: string[] | undefined
  if (toolsArg) {
    toolNames = toolsArg
      .replace("--tools=", "")
      .split(",")
      .filter((tool) => tool !== "")
    toolNames = toolNames.length > 0 ? toolNames : undefined
  }

  module.runServer({ toolNames }).catch((error) => {
    console.error("Fatal error running server:", error)
    process.exit(1)
  })
})
