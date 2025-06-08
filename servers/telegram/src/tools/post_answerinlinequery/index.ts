import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_answerinlinequery",
  "toolDescription": "",
  "baseUrl": "https://api.telegram.org/bot{token}",
  "path": "/answerInlineQuery",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "Parameters": "Parameters",
      "inline_query_id": "inline_query_id",
      "results": "results",
      "cache_time": "cache_time",
      "is_personal": "is_personal",
      "next_offset": "next_offset"
    }
  },
  inputParamsSchema
}

export default tool