import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listpets",
  "toolDescription": "List all pets",
  "baseUrl": "http://petstore.swagger.io/v1",
  "path": "/pets",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool