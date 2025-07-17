import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "unsubscribeperson",
  "toolDescription": "Unsubscribe a Person",
  "baseUrl": "https://api.encharge.io/v1",
  "path": "/people/unsubscribe",
  "method": "post",
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
      "email": "email",
      "userId": "userId",
      "id": "id"
    }
  },
  inputParamsSchema
}

export default tool