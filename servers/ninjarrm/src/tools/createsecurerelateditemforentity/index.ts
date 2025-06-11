import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createsecurerelateditemforentity",
  "toolDescription": "Create Secure Relation",
  "baseUrl": "https://app.ninjarmm.com/v2/",
  "path": "/v2/related-items/entity/{entityType}/{entityId}/secure",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "sessionKey",
      "value": "<mcp-env-var>SESSIONKEY</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONKEY"
    }
  ],
  "paramsMap": {
    "path": {
      "entityType": "entityType",
      "entityId": "entityId"
    }
  },
  inputParamsSchema
}

export default tool