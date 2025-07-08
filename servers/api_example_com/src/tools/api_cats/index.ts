import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "api_cats",
  "toolDescription": "Will return all cats",
  "baseUrl": "https://api.example.com",
  "path": "/api/cats",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "limit": "limit",
      "skip": "skip",
      "tags": "tags"
    }
  },
  inputParamsSchema
}

export default tool