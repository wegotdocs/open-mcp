import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "uploadartifact",
  "toolDescription": "Upload a cache artifact",
  "baseUrl": "https://api.vercel.com",
  "path": "/v8/artifacts/{hash}",
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
      "hash": "hash"
    },
    "query": {
      "teamId": "teamId",
      "slug": "slug"
    },
    "header": {
      "Content-Length": "Content-Length",
      "x-artifact-duration": "x-artifact-duration",
      "x-artifact-client-ci": "x-artifact-client-ci",
      "x-artifact-client-interactive": "x-artifact-client-interactive",
      "x-artifact-tag": "x-artifact-tag"
    }
  },
  inputParamsSchema
}

export default tool