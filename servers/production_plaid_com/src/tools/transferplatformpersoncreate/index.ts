import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "transferplatformpersoncreate",
  "toolDescription": "Create a person associated with an originator",
  "baseUrl": "https://production.plaid.com",
  "path": "/transfer/platform/person/create",
  "method": "post",
  "security": [
    {
      "key": "PLAID-CLIENT-ID",
      "value": "<mcp-env-var>PLAID_CLIENT_ID</mcp-env-var>",
      "in": "header",
      "envVarName": "PLAID_CLIENT_ID"
    },
    {
      "key": "PLAID-SECRET",
      "value": "<mcp-env-var>PLAID_SECRET</mcp-env-var>",
      "in": "header",
      "envVarName": "PLAID_SECRET"
    },
    {
      "key": "Plaid-Version",
      "value": "<mcp-env-var>PLAID_VERSION</mcp-env-var>",
      "in": "header",
      "envVarName": "PLAID_VERSION"
    }
  ],
  "paramsMap": {
    "body": {
      "client_id": "client_id",
      "secret": "secret",
      "originator_client_id": "originator_client_id",
      "name": "name",
      "email_address": "email_address",
      "phone_number": "phone_number",
      "address": "address",
      "id_number": "id_number",
      "date_of_birth": "date_of_birth",
      "relationship_to_originator": "relationship_to_originator"
    }
  },
  inputParamsSchema
}

export default tool