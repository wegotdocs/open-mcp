import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "customizetemplate",
  "toolDescription": "Create PDF template",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/invoices/pdf_templates/{templateId}/customization",
  "method": "post",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "path": {
      "templateId": "templateId"
    },
    "body": {
      "business_id": "business_id",
      "width_logo": "width_logo",
      "bottom_text": "bottom_text",
      "font_family": "font_family",
      "color": "color",
      "logo_hash": "logo_hash",
      "name_template": "name_template"
    }
  },
  inputParamsSchema
}

export default tool