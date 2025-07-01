import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_business_data",
  "toolDescription": "Update business data",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/myAccount/commercialInfo/",
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
      "personType": "personType",
      "cpfCnpj": "cpfCnpj",
      "birthDate": "birthDate",
      "companyType": "companyType",
      "companyName": "companyName",
      "incomeValue": "incomeValue",
      "email": "email",
      "phone": "phone",
      "mobilePhone": "mobilePhone",
      "site": "site",
      "postalCode": "postalCode",
      "address": "address",
      "addressNumber": "addressNumber",
      "complement": "complement",
      "province": "province"
    }
  },
  inputParamsSchema
}

export default tool