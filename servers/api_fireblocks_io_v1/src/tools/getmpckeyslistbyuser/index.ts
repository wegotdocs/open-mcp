import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getmpckeyslistbyuser",
  "toolDescription": "Get list of mpc keys by `userId`",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/keys/mpc/list/{userId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "userId": "userId"
    }
  },
  inputParamsSchema
}

export default tool