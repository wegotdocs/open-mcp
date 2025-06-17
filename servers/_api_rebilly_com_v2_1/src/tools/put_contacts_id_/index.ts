import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_contacts_id_",
  "toolDescription": "Create or update a contact with predefined ID",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/contacts/{id}",
  "method": "put",
  "security": [
    {
      "key": "REB-APIKEY",
      "value": "<mcp-env-var>REB_APIKEY</mcp-env-var>",
      "in": "header",
      "envVarName": "REB_APIKEY"
    }
  ],
  "paramsMap": {
    "body": {
      "id": "id",
      "customerId": "customerId",
      "firstName": "firstName",
      "lastName": "lastName",
      "organization": "organization",
      "address": "address",
      "address2": "address2",
      "city": "city",
      "region": "region",
      "country": "country",
      "postalCode": "postalCode",
      "phoneNumbers": "phoneNumbers",
      "emails": "emails",
      "isOutdated": "isOutdated",
      "createdTime": "createdTime",
      "updatedTime": "updatedTime",
      "customFields": "customFields",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool