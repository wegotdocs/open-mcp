import { z } from "zod"

export const toolName = `timeoffrequestsadd`
export const toolDescription = `Create Time Off Request`
export const baseUrl = `https://unify.apideck.com`
export const path = `/hris/time-off-requests`
export const method = `post`
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

export const inputParams = z.object({ "query": z.object({ "raw": z.boolean().describe("Include raw response. Mostly used for debugging purposes") }).optional(), "header": z.object({ "x-apideck-consumer-id": z.string().describe("ID of the consumer which you want to get or push data from"), "x-apideck-app-id": z.string().describe("The ID of your Unify application"), "x-apideck-service-id": z.string().describe("Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.").optional() }).optional(), "body": z.object({ "amount": z.number().describe("The amount of time off requested.").optional(), "approval_date": z.string().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}$")).describe("The date the request was approved").optional(), "created_at": z.string().datetime({ offset: true }).describe("The date and time when the object was created.").readonly().optional(), "created_by": z.string().nullable().describe("The user who created the object.").readonly().optional(), "description": z.string().describe("Description of the time off request.").optional(), "employee_id": z.string().describe("ID of the employee").optional(), "end_date": z.string().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}$")).describe("The end date of the time off request.").optional(), "id": z.string().describe("A unique identifier for an object.").readonly().optional(), "notes": z.object({ "employee": z.string().optional(), "manager": z.string().optional() }).optional(), "policy_id": z.string().describe("ID of the policy").optional(), "request_date": z.string().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}$")).describe("The date the request was made.").optional(), "request_type": z.enum(["vacation","sick","personal","jury_duty","volunteer","bereavement","other"]).describe("The type of request").optional(), "start_date": z.string().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}$")).describe("The start date of the time off request.").optional(), "status": z.enum(["requested","approved","declined","cancelled","deleted","other"]).describe("The status of the time off request.").optional(), "units": z.enum(["days","hours","other"]).describe("The unit of time off requested. Possible values include: `hours`, `days`, or `other`.").optional(), "updated_at": z.string().datetime({ offset: true }).nullable().describe("The date and time when the object was last updated.").readonly().optional(), "updated_by": z.string().nullable().describe("The user who last updated the object.").readonly().optional() }).strict().optional() }).shape