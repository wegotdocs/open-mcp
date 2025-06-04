import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletecollection",
  "toolDescription": "Delete collection",
  "baseUrl": "https://gate.whapi.cloud/",
  "path": "/business/collections/{CollectionID}",
  "method": "delete",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "token",
      "value": "<mcp-env-var>TOKEN</mcp-env-var>",
      "in": "query",
      "envVarName": "TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "CollectionID": "CollectionID"
    }
  },
  inputParamsSchema
}

export default tool