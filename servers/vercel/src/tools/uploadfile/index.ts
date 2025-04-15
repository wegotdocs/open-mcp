import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "uploadfile",
  "toolDescription": "Upload Deployment Files",
  "baseUrl": "https://api.vercel.com",
  "path": "/v2/files",
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
    "header": {
      "Content-Length": "Content-Length",
      "x-vercel-digest": "x-vercel-digest",
      "x-now-digest": "x-now-digest",
      "x-now-size": "x-now-size"
    }
  },
  inputParamsSchema
}

export default tool