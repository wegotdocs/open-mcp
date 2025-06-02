import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "setagentid",
  "toolDescription": "Set agent user id",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/key_link/signing_keys/{keyId}/agent_user_id",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "keyId": "keyId"
    },
    "body": {
      "agentUserId": "agentUserId"
    }
  },
  inputParamsSchema
}

export default tool