import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "webhook_post",
  "toolDescription": "Webhook",
  "baseUrl": "https://api.example.com",
  "path": "/",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "from": "from",
      "to": "to",
      "message": "message",
      "reference": "reference",
      "groupings": "groupings",
      "timeUtc": "timeUtc",
      "channel": "channel"
    }
  },
  inputParamsSchema
}

export default tool