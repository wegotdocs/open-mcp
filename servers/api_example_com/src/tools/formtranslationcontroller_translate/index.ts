import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "formtranslationcontroller_translate",
  "toolDescription": "Forward request to Azure Translator Service API",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/translation/translate",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "payload": "payload"
    },
    "header": {
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool