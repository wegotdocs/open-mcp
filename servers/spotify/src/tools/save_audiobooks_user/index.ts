import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "save_audiobooks_user",
  "toolDescription": "Save Audiobooks for Current User",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/me/audiobooks",
  "method": "put",
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
      "ids": "ids"
    }
  },
  inputParamsSchema
}

export default tool