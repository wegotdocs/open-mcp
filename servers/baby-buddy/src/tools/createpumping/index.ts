import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createpumping",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/pumping/",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "child": "child",
      "amount": "amount",
      "start": "start",
      "end": "end",
      "duration": "duration",
      "notes": "notes",
      "tags": "tags",
      "timer": "timer"
    }
  },
  inputParamsSchema
}

export default tool