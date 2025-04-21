import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getentitybyuid",
  "toolDescription": "Get a single entity by the UID.",
  "baseUrl": "https://api.example.com",
  "path": "/entities/by-uid/{uid}",
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
      "uid": "uid"
    }
  },
  inputParamsSchema
}

export default tool