import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getwhitelistipaddresses",
  "toolDescription": "Get whitelisted ip addresses for an API Key",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/management/api_users/{userId}/whitelist_ip_addresses",
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