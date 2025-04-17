#!/usr/bin/env node

import("./server.js").then((module) => {
  module.runServer().catch((error) => {
    console.error("Fatal error running server:", error)
    process.exit(1)
  })
})
