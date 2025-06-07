import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createsleep",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/sleep/",
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
      "nap": "nap",
      "notes": "notes",
      "tags": "tags"
    }
  },
  inputParamsSchema
}

export default tool