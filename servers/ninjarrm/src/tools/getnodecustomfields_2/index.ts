import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getnodecustomfields_2",
  "toolDescription": "Location custom fields",
  "baseUrl": "https://app.ninjarmm.com/v2/",
  "path": "/v2/organization/{id}/location/{locationId}/custom-fields",
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
      "id": "id",
      "locationId": "locationId"
    },
    "query": {
      "withInheritance": "withInheritance"
    }
  },
  inputParamsSchema
}

export default tool