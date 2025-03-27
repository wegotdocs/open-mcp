import { z } from "zod"

export const toolName = `employeepayrollsone`
export const toolDescription = `Get Employee Payroll`
export const baseUrl = `https://unify.apideck.com`
export const path = `/hris/payrolls/employees/{employee_id}/payrolls/{payroll_id}`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
    "in": "header",
    "envVarName": "AUTHORIZATION",
    "schemeType": "apiKey",
    "schemeName": "Authorization"
  }
]

export const inputParams = z.object({ "path": z.object({ "payroll_id": z.string().describe("ID of the payroll you are acting upon."), "employee_id": z.string().describe("ID of the employee you are acting upon.") }).optional(), "query": z.object({ "raw": z.boolean().describe("Include raw response. Mostly used for debugging purposes"), "fields": z.string().nullable().describe("The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded.").optional() }).optional(), "header": z.object({ "x-apideck-consumer-id": z.string().describe("ID of the consumer which you want to get or push data from"), "x-apideck-app-id": z.string().describe("The ID of your Unify application"), "x-apideck-service-id": z.string().describe("Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.").optional() }).optional() }).shape