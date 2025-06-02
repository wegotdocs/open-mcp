import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reprocessbycorrelation",
  "toolDescription": "Reprocessamento por Correlação",
  "baseUrl": "http://localhost:3030",
  "path": "/informational/reprocessing/correlation",
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
      "correlations": "correlations",
      "reprocessing_description": "reprocessing_description"
    }
  },
  inputParamsSchema
}

export default tool