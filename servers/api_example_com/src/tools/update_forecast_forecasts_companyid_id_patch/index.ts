import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_forecast_forecasts_companyid_id_patch",
  "toolDescription": "Update forecast",
  "baseUrl": "https://api.example.com",
  "path": "/forecasts/{companyId}/{id}",
  "method": "patch",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id",
      "companyId": "companyId"
    },
    "body": {
      "additionalInfo": "additionalInfo",
      "sync": "sync"
    }
  },
  inputParamsSchema
}

export default tool