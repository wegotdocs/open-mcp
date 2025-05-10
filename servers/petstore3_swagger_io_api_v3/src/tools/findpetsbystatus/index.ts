import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findpetsbystatus",
  "toolDescription": "Finds Pets by status.",
  "baseUrl": "https://petstore3.swagger.io/api/v3",
  "path": "/pet/findByStatus",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool