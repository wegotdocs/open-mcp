import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_subaccount",
  "toolDescription": "Create subaccount",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/accounts",
  "method": "post",
  "security": [
    {
      "key": "access_token",
      "value": "<mcp-env-var>ACCESS_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "ACCESS_TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "name": "name",
      "email": "email",
      "loginEmail": "loginEmail",
      "cpfCnpj": "cpfCnpj",
      "birthDate": "birthDate",
      "companyType": "companyType",
      "phone": "phone",
      "mobilePhone": "mobilePhone",
      "site": "site",
      "incomeValue": "incomeValue",
      "address": "address",
      "addressNumber": "addressNumber",
      "complement": "complement",
      "province": "province",
      "postalCode": "postalCode",
      "webhooks": "webhooks"
    }
  },
  inputParamsSchema
}

export default tool