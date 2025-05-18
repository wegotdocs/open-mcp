import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "youtube_tests_insert",
  "toolDescription": "POST method.",
  "baseUrl": "https://youtube.googleapis.com",
  "path": "/youtube/v3/tests",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "part": "part",
      "externalChannelId": "externalChannelId"
    },
    "body": {
      "featuredPart": "featuredPart",
      "gaia": "gaia",
      "id": "id",
      "snippet": "snippet"
    }
  },
  inputParamsSchema
}

export default tool