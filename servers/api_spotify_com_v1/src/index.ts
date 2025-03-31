#!/usr/bin/env node

const args = process.argv

if (args[2] === "add-to-client") {
  if (!args[3]) {
    throw new Error("Please provide the path to your MCP client config")
  }
  import("./add-to-client.js").then((module) => {
    module.addToClient(args[3])
  })
} else {
  import("./server.js").then((module) => {
    module.runServer().catch((error) => {
      console.error("Fatal error running server:", error)
      process.exit(1)
    })
  })
}
