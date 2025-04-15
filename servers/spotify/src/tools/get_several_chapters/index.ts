import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_several_chapters",
  "toolDescription": "Get Several Chapters",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/chapters",
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