import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listvacancies",
  "toolDescription": "Get vacancies list",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/recruitment/v1/vacancies",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool