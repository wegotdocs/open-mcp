import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getdeviceactivities",
  "toolDescription": "Device activities",
  "baseUrl": "https://app.ninjarmm.com/v2/",
  "path": "/v2/device/{id}/activities",
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
      "olderThan": "olderThan",
      "newerThan": "newerThan",
      "activityType": "activityType",
      "status": "status",
      "seriesUid": "seriesUid",
      "pageSize": "pageSize",
      "lang": "lang",
      "tz": "tz"
    }
  },
  inputParamsSchema
}

export default tool