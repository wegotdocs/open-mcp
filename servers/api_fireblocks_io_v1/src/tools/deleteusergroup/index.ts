import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteusergroup",
  "toolDescription": "Delete user group",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/management/user_groups/{groupId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "groupId": "groupId"
    }
  },
  inputParamsSchema
}

export default tool