import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "search",
  "toolDescription": "Searches an entities Packages, Tracking Pixels",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/search",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "query": "query",
      "context": "context"
    }
  },
  inputParamsSchema
}

export default tool