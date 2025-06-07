import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createtemperature",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/temperature/",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "child": "child",
      "temperature": "temperature",
      "time": "time",
      "notes": "notes",
      "tags": "tags"
    }
  },
  inputParamsSchema
}

export default tool