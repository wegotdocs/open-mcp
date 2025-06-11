import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "oauthclientscreate",
  "toolDescription": "Create an OAuth client",
  "baseUrl": "https://app.getoutline.com/api",
  "path": "/oauthClients.create",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "name": "name",
      "description": "description",
      "developerName": "developerName",
      "developerUrl": "developerUrl",
      "avatarUrl": "avatarUrl",
      "redirectUris": "redirectUris",
      "published": "published"
    }
  },
  inputParamsSchema
}

export default tool