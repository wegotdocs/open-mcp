import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "recordevents",
  "toolDescription": "Record an artifacts cache usage event",
  "baseUrl": "https://api.vercel.com",
  "path": "/v8/artifacts/events",
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
      "x-artifact-client-ci": "x-artifact-client-ci",
      "x-artifact-client-interactive": "x-artifact-client-interactive"
    }
  },
  inputParamsSchema
}

export default tool