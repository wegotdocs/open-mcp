import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createmovequeuerequest",
  "toolDescription": "Creates a MoveQueueRequest object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/MoveQueueRequest",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "body": {
      "AtomId": "AtomId",
      "DestinationQueue": "DestinationQueue",
      "SourceQueue": "SourceQueue"
    }
  },
  inputParamsSchema
}

export default tool