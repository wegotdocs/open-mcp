import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createusergroup",
  "toolDescription": "Create user group",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/management/user_groups",
  "method": "post",
  "security": [],
  "paramsMap": {
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