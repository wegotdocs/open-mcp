import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "uploadcert",
  "toolDescription": "Upload a cert",
  "baseUrl": "https://api.vercel.com",
  "path": "/v7/certs",
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
    "query": {
      "teamId": "teamId",
      "slug": "slug"
    },
    "body": {
      "ca": "ca",
      "key": "key",
      "cert": "cert",
      "skipValidation": "skipValidation"
    }
  },
  inputParamsSchema
}

export default tool