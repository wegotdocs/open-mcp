import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "recording_share_link_create",
  "toolDescription": "Recording Sharelink -- Create",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/recordingsharelink",
  "method": "post",
  "security": [
    {
      "key": "apikey",
      "value": "<mcp-env-var>APIKEY</mcp-env-var>",
      "in": "query",
      "envVarName": "APIKEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "privacy": "privacy",
      "recording_id": "recording_id",
      "recording_type": "recording_type"
    }
  },
  inputParamsSchema
}

export default tool