import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "aliasval2",
  "toolDescription": "Get a val",
  "baseUrl": "https://api.val.town",
  "path": "/v2/alias/vals/{username}/{val_name}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "username": "username",
      "val_name": "val_name"
    }
  },
  inputParamsSchema
}

export default tool