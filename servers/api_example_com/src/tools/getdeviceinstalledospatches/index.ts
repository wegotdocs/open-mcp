import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getdeviceinstalledospatches",
  "toolDescription": "OS Patch installation report for device",
  "baseUrl": "https://api.example.com",
  "path": "/v2/device/{id}/os-patch-installs",
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
      "id": "id"
    },
    "query": {
      "status": "status",
      "installedBefore": "installedBefore",
      "installedAfter": "installedAfter"
    }
  },
  inputParamsSchema
}

export default tool