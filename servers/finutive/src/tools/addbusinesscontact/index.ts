import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addbusinesscontact",
  "toolDescription": "Add a new contact to a specific business",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/createContact",
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
    "body": {
      "business_id": "business_id",
      "user_id": "user_id",
      "email": "email",
      "first_name": "first_name",
      "last_name": "last_name",
      "phone_prefix": "phone_prefix",
      "phone_number": "phone_number",
      "main_contact": "main_contact",
      "relation_type": "relation_type",
      "role": "role",
      "address": "address"
    }
  },
  inputParamsSchema
}

export default tool