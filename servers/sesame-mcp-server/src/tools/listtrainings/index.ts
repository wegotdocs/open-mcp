import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listtrainings",
  "toolDescription": "List trainings",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/training/v1/trainings",
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
      "name": "name",
      "startDate": "startDate",
      "endDate": "endDate",
      "orderType": "orderType",
      "orderKey": "orderKey",
      "limit": "limit",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool