import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_new_customer",
  "toolDescription": "Create new customer",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/customers",
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
      "cpfCnpj": "cpfCnpj",
      "email": "email",
      "phone": "phone",
      "mobilePhone": "mobilePhone",
      "address": "address",
      "addressNumber": "addressNumber",
      "complement": "complement",
      "province": "province",
      "postalCode": "postalCode",
      "externalReference": "externalReference",
      "notificationDisabled": "notificationDisabled",
      "additionalEmails": "additionalEmails",
      "municipalInscription": "municipalInscription",
      "stateInscription": "stateInscription",
      "observations": "observations",
      "groupName": "groupName",
      "company": "company",
      "foreignCustomer": "foreignCustomer"
    }
  },
  inputParamsSchema
}

export default tool