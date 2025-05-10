import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuseravatarbyname",
  "toolDescription": "Get User Avatar by name",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/users/{username}/avatar",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "username": "username"
    },
    "query": {
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool