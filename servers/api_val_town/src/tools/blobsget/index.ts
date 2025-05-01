import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "blobsget",
  "toolDescription": "Get a blob’s contents.",
  "baseUrl": "https://api.val.town",
  "path": "/v1/blob/{key}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "key": "key"
    }
  },
  inputParamsSchema
}

export default tool