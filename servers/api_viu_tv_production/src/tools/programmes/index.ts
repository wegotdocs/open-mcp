import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "programmes",
  "toolDescription": "programmes",
  "baseUrl": "https://api.viu.tv/production",
  "path": "/programmes",
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
      "progGenre": "progGenre",
      "progType": "progType",
      "progNature": "progNature",
      "limit": "limit",
      "skip": "skip",
      "sort": "sort"
    },
    "header": {
      "accept-language": "accept-language"
    }
  },
  inputParamsSchema
}

export default tool