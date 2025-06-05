import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "subtract",
  "toolDescription": "Restar dos números",
  "baseUrl": "https://api.ejemplo.com",
  "path": "/subtract",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "a": "a",
      "b": "b"
    }
  },
  inputParamsSchema
}

export default tool