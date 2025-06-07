import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createfeeding",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/feedings/",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "child": "child",
      "start": "start",
      "end": "end",
      "timer": "timer",
      "duration": "duration",
      "type": "type",
      "method": "method",
      "amount": "amount",
      "notes": "notes",
      "tags": "tags"
    }
  },
  inputParamsSchema
}

export default tool