import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "editbusinesscontact",
  "toolDescription": "Edit contact from business",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/businessContacts/{business_contact_id}/updateContact",
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
      "business_contact_id": "business_contact_id"
    },
    "body": {
      "business_id": "business_id",
      "user_id": "user_id",
      "email": "email",
      "first_name": "first_name",
      "last_name": "last_name",
      "phone_prefix": "phone_prefix",
      "phone_number": "phone_number",
      "relation_type": "relation_type",
      "role": "role",
      "address": "address"
    }
  },
  inputParamsSchema
}

export default tool