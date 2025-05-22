import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "numbers_delete",
  "toolDescription": "Dialpad Number -- Unassign",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/numbers/{number}",
  "method": "delete",
  "security": [
    {
      "key": "apikey",
      "value": "<mcp-env-var>APIKEY</mcp-env-var>",
      "in": "query",
      "envVarName": "APIKEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "number": "number"
    },
    "query": {
      "release": "release"
    }
  },
  inputParamsSchema
}

export default tool