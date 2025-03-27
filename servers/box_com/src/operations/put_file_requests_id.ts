import { z } from "zod"

export const toolName = `put_file_requests_id`
export const toolDescription = `Update file request`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/file_requests/{file_request_id}`
export const method = `put`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "path": z.object({ "file_request_id": z.string().describe("The unique identifier that represent a file request.\n\nThe ID for any file request can be determined\nby visiting a file request builder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/filerequest/123`\nthe `file_request_id` is `123`.") }).optional(), "header": z.object({ "if-match": z.string().describe("Ensures this item hasn't recently changed before\nmaking changes.\n\nPass in the item's last observed `etag` value\ninto this header and the endpoint will fail\nwith a `412 Precondition Failed` if it\nhas changed since.").optional() }).optional(), "body": z.object({ "description": z.string().describe("An optional new description for the file request. This can be\nused to change the description of the file request.\n\nThis will default to the value on the existing file request.").optional(), "expires_at": z.string().datetime({ offset: true }).describe("The date after which a file request will no longer accept new\nsubmissions.\n\nAfter this date, the `status` will automatically be set to\n`inactive`.\n\nThis will default to the value on the existing file request.").optional(), "is_description_required": z.boolean().describe("Whether a file request submitter is required to provide\na description of the files they are submitting.\n\nWhen this setting is set to true, the Box UI will show\na description field on the file request form.\n\nThis will default to the value on the existing file request.").optional(), "is_email_required": z.boolean().describe("Whether a file request submitter is required to provide\ntheir email address.\n\nWhen this setting is set to true, the Box UI will show\nan email field on the file request form.\n\nThis will default to the value on the existing file request.").optional(), "status": z.enum(["active","inactive"]).describe("An optional new status of the file request.\n\nWhen the status is set to `inactive`, the file request\nwill no longer accept new submissions, and any visitor\nto the file request URL will receive a `HTTP 404` status\ncode.\n\nThis will default to the value on the existing file request.").optional(), "title": z.string().describe("An optional new title for the file request. This can be\nused to change the title of the file request.\n\nThis will default to the value on the existing file request.").optional() }).describe("The request body to update a file request.").optional() }).shape