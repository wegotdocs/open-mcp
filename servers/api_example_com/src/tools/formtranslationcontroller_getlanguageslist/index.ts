import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "formtranslationcontroller_getlanguageslist",
  "toolDescription": "Forward request to Azure Translator Languages Service API",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/translation/languages/{lang}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "lang": "lang"
    },
    "header": {
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool