import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_organizations_id_",
  "toolDescription": "Create or update a organization with predefined ID",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/organizations/{id}",
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
      "createdTime": "createdTime",
      "updatedTime": "updatedTime",
      "name": "name",
      "address": "address",
      "address2": "address2",
      "city": "city",
      "region": "region",
      "country": "country",
      "postalCode": "postalCode",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool