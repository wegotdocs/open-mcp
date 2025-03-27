import { z } from "zod"

export const toolName = `employeesall`
export const toolDescription = `List Employees`
export const baseUrl = `https://unify.apideck.com`
export const path = `/hris/employees`
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

export const inputParams = z.object({ "query": z.object({ "raw": z.boolean().describe("Include raw response. Mostly used for debugging purposes"), "cursor": z.string().nullable().describe("Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.").optional(), "limit": z.number().int().gte(1).lte(200).describe("Number of results to return. Minimum 1, Maximum 200, Default 20"), "filter": z.object({ "company_id": z.string().describe("Company ID to filter on").optional(), "department_id": z.string().describe("ID of the department to filter on").optional(), "email": z.string().describe("Email to filter on").optional(), "employee_number": z.string().describe("Employee number to filter on").optional(), "employment_status": z.enum(["active","inactive","terminated","other"]).describe("Employment status to filter on").optional(), "first_name": z.string().describe("First Name to filter on").optional(), "last_name": z.string().describe("Last Name to filter on").optional(), "manager_id": z.string().describe("Manager id to filter on").optional(), "title": z.string().describe("Job title to filter on").optional() }).strict().describe("Apply filters").optional(), "sort": z.object({ "by": z.enum(["first_name","last_name","created_at","updated_at"]).describe("The field on which to sort the Employees").optional(), "direction": z.enum(["asc","desc"]).describe("The direction in which to sort the results") }).strict().describe("Apply sorting").optional(), "fields": z.string().nullable().describe("The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded.").optional() }).optional(), "header": z.object({ "x-apideck-consumer-id": z.string().describe("ID of the consumer which you want to get or push data from"), "x-apideck-app-id": z.string().describe("The ID of your Unify application"), "x-apideck-service-id": z.string().describe("Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.").optional() }).optional() }).shape