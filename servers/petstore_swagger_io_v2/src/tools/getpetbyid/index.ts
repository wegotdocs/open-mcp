import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpetbyid",
  "toolDescription": "Find pet by ID",
  "baseUrl": "http://petstore.swagger.io/v2",
  "path": "/pet/{petId}",
  "method": "get",
  "security": [
    {
      "key": "api_key",
      "value": "<mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "petId": "petId"
    }
  },
  inputParamsSchema
}

export default tool