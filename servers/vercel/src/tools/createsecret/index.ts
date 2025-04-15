import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createsecret",
  "toolDescription": "Create a new secret",
  "baseUrl": "https://api.vercel.com",
  "path": "/v2/secrets/{name}",
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
      "name": "name",
      "value": "value",
      "decryptable": "decryptable"
    }
  },
  inputParamsSchema
}

export default tool