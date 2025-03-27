import { z } from "zod"

export const toolName = `get_records`
export const toolDescription = `Load records synchronously`
export const baseUrl = `https://api.nexmo.com`
export const path = `/v2/reports/records`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  }
]

export const inputParams = z.object({ "query": z.object({ "account_id": z.string().min(8).max(8).describe("The account for which the list of reports will be queried."), "product": z.enum(["SMS","VOICE-CALL","VOICE-FAILED","IN-APP-VOICE","WEBSOCKET-CALL","VERIFY-API","NUMBER-INSIGHT","MESSAGES","ASR","CONVERSATIONS","REPORTS-USAGE"]).describe("The product to return records for"), "direction": z.enum(["inbound","outbound"]).describe("Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.").optional(), "id": z.string().describe("The UUID of the message or call to be searched for. You can specify a comma-separated list of UUIDs. If UUIDs are not found they are listed in the response in the `ids_not_found` field.\n\nIf you specify `id`, you must not specify `status`, `date_start` or `date_end`.\n").optional(), "date_start": z.string().date().describe("ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports should begin. \n\nIt filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.\n\nIf you provide this, you must provide `date_end` and must not provide `id`.\n").optional(), "date_end": z.string().date().describe("**Must be no more than 24 hours later than `date_start`**\n\nISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.\n\nIt is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR.\n\nIf you provide this, you must provide `date_start` and must not provide `id`.\n").optional(), "include_message": z.union([z.literal(true), z.literal(false)]).describe("Include the message contents in the records. Only applicable for use with products `SMS` and `MESSAGES`, where it is optional."), "show_concatenated": z.union([z.literal(true), z.literal(false)]).describe("Indicates whether the SMS was split up into multiple parts (due to its length)."), "status": z.enum(["delivered","expired","failed","rejected","accepted","buffered","unknown","deleted"]).describe("The SMS status to search for. Optional where product is `SMS`.") }).optional() }).shape