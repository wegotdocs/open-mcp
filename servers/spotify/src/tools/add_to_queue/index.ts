import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_to_queue",
  "toolDescription": "Add Item to Playback Queue",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/me/player/queue",
  "method": "post",
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
      "uri": "uri",
      "device_id": "device_id"
    }
  },
  inputParamsSchema
}

export default tool