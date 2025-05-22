import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "contacts_update",
  "toolDescription": "Contact -- Update",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/contacts/{id}",
  "method": "patch",
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
    "path": {
      "id": "id"
    },
    "body": {
      "company_name": "company_name",
      "emails": "emails",
      "extension": "extension",
      "first_name": "first_name",
      "job_title": "job_title",
      "last_name": "last_name",
      "phones": "phones",
      "trunk_group": "trunk_group",
      "urls": "urls"
    }
  },
  inputParamsSchema
}

export default tool