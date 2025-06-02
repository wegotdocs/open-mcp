import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getholidays",
  "toolDescription": "Consultar Feriados",
  "baseUrl": "http://localhost:3030",
  "path": "/holiday",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "country": "country",
      "year": "year"
    }
  },
  inputParamsSchema
}

export default tool