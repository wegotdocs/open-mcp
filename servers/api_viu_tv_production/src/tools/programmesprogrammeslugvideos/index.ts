import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "programmesprogrammeslugvideos",
  "toolDescription": "programmes/:programmeSlug/videos",
  "baseUrl": "https://api.viu.tv/production",
  "path": "/programmes/{programmeSlug}/videos",
  "method": "get",
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
      "type": "type",
      "skip": "skip",
      "limit": "limit",
      "sort": "sort"
    }
  },
  inputParamsSchema
}

export default tool