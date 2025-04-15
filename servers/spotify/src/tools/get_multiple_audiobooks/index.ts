import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_multiple_audiobooks",
  "toolDescription": "Get Several Audiobooks",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/audiobooks",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "ids": "ids",
      "market": "market"
    }
  },
  inputParamsSchema
}

export default tool