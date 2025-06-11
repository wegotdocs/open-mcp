import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcustomfieldsdetailedreport",
  "toolDescription": "Custom fields detailed report",
  "baseUrl": "https://app.ninjarmm.com/v2/",
  "path": "/v2/queries/custom-fields-detailed",
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
    "query": {
      "df": "df",
      "cursor": "cursor",
      "pageSize": "pageSize",
      "updatedAfter": "updatedAfter",
      "fields": "fields",
      "showSecureValues": "showSecureValues"
    }
  },
  inputParamsSchema
}

export default tool