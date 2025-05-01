import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "blobsstore",
  "toolDescription": "Store data in blob storage",
  "baseUrl": "https://api.val.town",
  "path": "/v1/blob/{key}",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "key": "key"
    }
  },
  inputParamsSchema
}

export default tool