import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "divide",
  "toolDescription": "Dividir dos números",
  "baseUrl": "https://api.ejemplo.com",
  "path": "/divide",
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