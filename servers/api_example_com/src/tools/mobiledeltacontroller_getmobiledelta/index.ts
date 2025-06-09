import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "mobiledeltacontroller_getmobiledelta",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/mobile/forms",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "formTypes": "formTypes"
    },
    "header": {
      "User-Agent": "User-Agent",
      "ntx-client": "ntx-client",
      "ntx-correlation-id": "ntx-correlation-id",
      "ntx-operation-id": "ntx-operation-id",
      "ntx-nm-last-modified": "ntx-nm-last-modified",
      "ntx-tenancy": "ntx-tenancy",
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool