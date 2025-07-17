import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getspecificpeople",
  "toolDescription": "Retrive specific people in your account.",
  "baseUrl": "https://api.encharge.io/v1",
  "path": "/people",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "people": "people"
    }
  },
  inputParamsSchema
}

export default tool