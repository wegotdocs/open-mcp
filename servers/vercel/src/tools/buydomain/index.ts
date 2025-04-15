import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "buydomain",
  "toolDescription": "Purchase a domain",
  "baseUrl": "https://api.vercel.com",
  "path": "/v5/domains/buy",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "teamId": "teamId",
      "slug": "slug"
    },
    "body": {
      "name": "name",
      "expectedPrice": "expectedPrice",
      "renew": "renew",
      "country": "country",
      "orgName": "orgName",
      "firstName": "firstName",
      "lastName": "lastName",
      "address1": "address1",
      "city": "city",
      "state": "state",
      "postalCode": "postalCode",
      "phone": "phone",
      "email": "email"
    }
  },
  inputParamsSchema
}

export default tool