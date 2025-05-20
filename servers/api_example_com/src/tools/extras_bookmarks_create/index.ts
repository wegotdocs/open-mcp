import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "extras_bookmarks_create",
  "toolDescription": "Post a list of bookmark objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/extras/bookmarks/",
  "method": "post",
  "security": [
    {
      "key": "sessionid",
      "value": "<mcp-env-var>SESSIONID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONID"
    },
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "body": {
      "object_type": "object_type",
      "object_id": "object_id",
      "user": "user"
    }
  },
  inputParamsSchema
}

export default tool