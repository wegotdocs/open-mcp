import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatelocation",
  "toolDescription": "Update location",
  "baseUrl": "https://app.ninjarmm.com/v2/",
  "path": "/v2/organization/{id}/locations/{locationId}",
  "method": "patch",
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
    "body": {
      "name": "name",
      "address": "address",
      "description": "description",
      "userData": "userData",
      "tags": "tags",
      "fields": "fields"
    }
  },
  inputParamsSchema
}

export default tool