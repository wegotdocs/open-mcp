import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "valscreate2",
  "toolDescription": "Create a new val",
  "baseUrl": "https://api.val.town",
  "path": "/v2/vals",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "name": "name",
      "description": "description",
      "privacy": "privacy"
    }
  },
  inputParamsSchema
}

export default tool