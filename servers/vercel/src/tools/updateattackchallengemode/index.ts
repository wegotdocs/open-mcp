import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateattackchallengemode",
  "toolDescription": "Update Attack Challenge mode",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/security/attack-mode",
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
    "query": {
      "teamId": "teamId",
      "slug": "slug"
    },
    "body": {
      "projectId": "projectId",
      "attackModeEnabled": "attackModeEnabled",
      "attackModeActiveUntil": "attackModeActiveUntil"
    }
  },
  inputParamsSchema
}

export default tool