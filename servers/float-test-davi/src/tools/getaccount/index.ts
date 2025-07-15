import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getaccount",
  "toolDescription": "Retrieve a single account",
  "baseUrl": "https://api.float.com/v3",
  "path": "/accounts/{account_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "account_id": "account_id"
    },
    "query": {
      "expand": "expand"
    }
  },
  inputParamsSchema
}

export default tool