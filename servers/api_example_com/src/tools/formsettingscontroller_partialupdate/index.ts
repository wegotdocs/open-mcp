import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "formsettingscontroller_partialupdate",
  "toolDescription": "Update part of tenant level form settings resource.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/settings",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "body": {
      "enableCustomCss": "enableCustomCss",
      "allowAnonymous": "allowAnonymous",
      "enablePlugins": "enablePlugins",
      "enableAuthTaskFormsRedirect": "enableAuthTaskFormsRedirect",
      "localizationAndTranslation": "localizationAndTranslation",
      "enableAiFormGenerator": "enableAiFormGenerator",
      "enableFormPdfConverter": "enableFormPdfConverter"
    },
    "header": {
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool