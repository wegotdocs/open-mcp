#!/usr/bin/env node
const args = process.argv

if (args[2] === "add-to-client") {
  import("./add-to-client.js")
    .then((module) => module.addToClient(args[3]))
    .then(() => {
      process.exit(0)
    })
    .catch((error) => {
      console.error(`Failed to update config: ${error.message}`)
      process.exit(1)
    })
} else {
  import("./server.js").then((module) => {
    module.runServer().catch((error) => {
      console.error("Fatal error running server:", error)
      process.exit(1)
    })
  })
}
