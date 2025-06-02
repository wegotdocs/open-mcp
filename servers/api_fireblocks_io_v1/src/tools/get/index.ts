import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get",
  "toolDescription": "List all open Web3 connections",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/connections",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "order": "order",
      "filter": "filter",
      "sort": "sort",
      "pageSize": "pageSize",
      "next": "next"
    }
  },
  inputParamsSchema
}

export default tool