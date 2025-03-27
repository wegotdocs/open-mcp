import { z } from "zod";
export const toolName = `payrollsall`;
export const toolDescription = `List Payroll`;
export const baseUrl = `https://unify.apideck.com`;
export const path = `/hris/payrolls`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
        "in": "header",
        "envVarName": "AUTHORIZATION",
        "schemeType": "apiKey",
        "schemeName": "Authorization"
    }
];
export const inputParams = z.object({ "query": z.object({ "raw": z.boolean().describe("Include raw response. Mostly used for debugging purposes"), "filter": z.object({ "end_date": z.string().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}$")).describe("Return payrolls whose pay period is before the end date").optional(), "start_date": z.string().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}$")).describe("Return payrolls whose pay period is after the start date").optional() }).strict().describe("Apply filters").optional(), "fields": z.string().nullable().describe("The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded.").optional() }).optional(), "header": z.object({ "x-apideck-consumer-id": z.string().describe("ID of the consumer which you want to get or push data from"), "x-apideck-app-id": z.string().describe("The ID of your Unify application"), "x-apideck-service-id": z.string().describe("Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.").optional() }).optional() }).shape;
