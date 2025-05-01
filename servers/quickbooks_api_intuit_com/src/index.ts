#!/usr/bin/env node

const TOOLS_ARG_NAME = "--tools"

function parseCSV(csv: string | undefined) {
  if (!csv) {
    return undefined
  }
  const arr = csv
    .trim()
    .split(",")
    .filter((x) => x !== "")
  return arr.length > 0 ? arr : undefined
}

import("./server.js").then((module) => {
  const args = process.argv.slice(2)
  const toolsCSV = args
    .find((arg) => arg.startsWith(TOOLS_ARG_NAME))
    ?.replace(TOOLS_ARG_NAME, "")

  const toolNames = parseCSV(toolsCSV)

  module.runServer({ toolNames }).catch((error) => {
    console.error("Fatal error running server:", error)
    process.exit(1)
  })
})
