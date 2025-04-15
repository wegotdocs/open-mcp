import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatefirewallconfig",
  "toolDescription": "Update Firewall Configuration",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/security/firewall/config",
  "method": "patch",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "projectId": "projectId",
      "teamId": "teamId",
      "slug": "slug"
    }
  },
  inputParamsSchema
}

export default tool