import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrieve_forecast_forecasts_companyid_id_get",
  "toolDescription": "Retrieve forecast",
  "baseUrl": "https://api.example.com",
  "path": "/forecasts/{companyId}/{id}",
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
    "path": {
      "id": "id",
      "companyId": "companyId"
    }
  },
  inputParamsSchema
}

export default tool