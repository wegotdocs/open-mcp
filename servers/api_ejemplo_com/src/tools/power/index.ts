import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "power",
  "toolDescription": "Calcular potencia",
  "baseUrl": "https://api.ejemplo.com",
  "path": "/power",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "base": "base",
      "exponent": "exponent"
    }
  },
  inputParamsSchema
}

export default tool