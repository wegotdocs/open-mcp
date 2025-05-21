import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createfeelingtypeendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/feeling-types",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "name": "name",
      "emojiCode": "emojiCode"
    }
  },
  inputParamsSchema
}

export default tool