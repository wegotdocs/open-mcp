import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getusergroup",
  "toolDescription": "Get user group",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/management/user_groups/{groupId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "groupId": "groupId"
    }
  },
  inputParamsSchema
}

export default tool