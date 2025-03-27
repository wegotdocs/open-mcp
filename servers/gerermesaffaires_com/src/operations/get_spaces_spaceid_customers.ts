import { z } from "zod"

export const toolName = `get_spaces_spaceid_customers`
export const toolDescription = `Returns folder with Id and customer data`
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`
export const path = `/spaces/{spaceId}/customers`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "path": z.object({ "spaceId": z.string().describe("Id of the space") }).optional(), "query": z.object({ "CustomerNumber": z.string().describe("CustomerNumber of the customer").optional(), "WithContractingPartner": z.string().describe("if present returns infos of the ContractingPartner too").optional() }).optional() }).shape