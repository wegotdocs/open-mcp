import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "setusergroups",
  "toolDescription": "Set user group",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/smart-transfers/settings/user-groups",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "userGroupIds": "userGroupIds"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool