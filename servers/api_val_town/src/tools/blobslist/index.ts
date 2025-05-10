import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "blobslist",
  "toolDescription": "List blobs in your account",
  "baseUrl": "https://api.val.town",
  "path": "/v1/blob",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "prefix": "prefix"
    }
  },
  inputParamsSchema
}

export default tool