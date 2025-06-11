import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getrelateditemswithentity",
  "toolDescription": "List related entity related items",
  "baseUrl": "https://app.ninjarmm.com/v2/",
  "path": "/v2/related-items/with-related-entity/{relEntityType}/{relEntityId}",
  "method": "get",
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
      "relEntityType": "relEntityType",
      "relEntityId": "relEntityId"
    }
  },
  inputParamsSchema
}

export default tool