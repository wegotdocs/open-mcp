import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "adddefaultroletousers",
  "toolDescription": "Apply organization default role to all users.",
  "baseUrl": "https://api.sanity.io",
  "path": "/vX/access/organization/{resourceId}/users/roles/default",
  "method": "put",
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
      "resourceId": "resourceId"
    }
  },
  inputParamsSchema
}

export default tool