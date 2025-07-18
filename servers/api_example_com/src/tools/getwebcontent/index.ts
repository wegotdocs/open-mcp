import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getwebcontent",
  "toolDescription": "Get web by id",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/web/{webId}",
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
    "path": {
      "webId": "webId"
    }
  },
  inputParamsSchema
}

export default tool