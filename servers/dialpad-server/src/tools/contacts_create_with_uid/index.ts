import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "contacts_create_with_uid",
  "toolDescription": "Contact -- Create or Update",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/contacts",
  "method": "put",
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
      "phones": "phones",
      "trunk_group": "trunk_group",
      "uid": "uid",
      "urls": "urls"
    }
  },
  inputParamsSchema
}

export default tool