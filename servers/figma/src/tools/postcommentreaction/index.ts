import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "postcommentreaction",
  "toolDescription": "Add a reaction to a comment",
  "baseUrl": "https://api.figma.com",
  "path": "/v1/files/{file_key}/comments/{comment_id}/reactions",
  "method": "post",
  "security": [
    {
      "key": "X-Figma-Token",
      "value": "<mcp-env-var>X_FIGMA_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "X_FIGMA_TOKEN"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "file_key": "file_key",
      "comment_id": "comment_id"
    },
    "body": {
      "emoji": "emoji"
    }
  },
  inputParamsSchema
}

export default tool