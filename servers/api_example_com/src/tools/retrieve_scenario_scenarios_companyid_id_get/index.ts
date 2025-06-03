import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrieve_scenario_scenarios_companyid_id_get",
  "toolDescription": "Retrieve scenario",
  "baseUrl": "https://api.example.com",
  "path": "/scenarios/{companyId}/{id}",
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