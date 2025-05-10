import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_otm_options_post",
  "toolDescription": "Post",
  "baseUrl": "https://api.example.com",
  "path": "/otm-options",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "ticker": "ticker",
      "expiration_date": "expiration_date"
    }
  },
  inputParamsSchema
}

export default tool