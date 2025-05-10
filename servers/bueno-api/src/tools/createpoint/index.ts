import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createpoint",
  "toolDescription": "Create Point",
  "baseUrl": "https://api.example.com",
  "path": "/v2/points",
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
      "name": "name",
      "type": "type",
      "unit": "unit",
      "tags": "tags",
      "props": "props",
      "refs": "refs"
    }
  },
  inputParamsSchema
}

export default tool