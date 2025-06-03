import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateservice",
  "toolDescription": "Update service",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/services/{service_id}",
  "method": "put",
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
      "service_id": "service_id"
    },
    "body": {
      "name": "name",
      "description": "description",
      "english_name": "english_name",
      "english_description": "english_description",
      "icon": "icon",
      "status": "status",
      "onboarding": "onboarding",
      "recurrent": "recurrent",
      "products": "products",
      "file_types": "file_types",
      "url_landing": "url_landing",
      "collaborator_email": "collaborator_email",
      "email_content": "email_content",
      "email_attachments": "email_attachments",
      "counter": "counter",
      "outsourced": "outsourced",
      "serie_id": "serie_id",
      "external_category": "external_category",
      "ambitions": "ambitions",
      "partner_privacy_policy": "partner_privacy_policy",
      "responsibles": "responsibles"
    }
  },
  inputParamsSchema
}

export default tool