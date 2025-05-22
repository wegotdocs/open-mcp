import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "contacts_create",
  "toolDescription": "Contact -- Create",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/contacts",
  "method": "post",
  "security": [
    {
      "key": "apikey",
      "value": "<mcp-env-var>APIKEY</mcp-env-var>",
      "in": "query",
      "envVarName": "APIKEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "company_name": "company_name",
      "emails": "emails",
      "extension": "extension",
      "first_name": "first_name",
      "job_title": "job_title",
      "last_name": "last_name",
      "owner_id": "owner_id",
      "phones": "phones",
      "trunk_group": "trunk_group",
      "urls": "urls"
    }
  },
  inputParamsSchema
}

export default tool