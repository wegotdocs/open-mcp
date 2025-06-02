import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateusergroup",
  "toolDescription": "Update user group",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/management/user_groups/{groupId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "groupId": "groupId"
    },
    "body": {
      "groupName": "groupName",
      "memberIds": "memberIds"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool