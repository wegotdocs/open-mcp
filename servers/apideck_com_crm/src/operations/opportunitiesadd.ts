import { z } from "zod"

export const toolName = `opportunitiesadd`
export const toolDescription = `Create opportunity`
export const baseUrl = `https://unify.apideck.com`
export const path = `/crm/opportunities`
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

export const inputParams = z.object({ "query": z.object({ "raw": z.boolean().describe("Include raw response. Mostly used for debugging purposes") }).optional(), "header": z.object({ "x-apideck-consumer-id": z.string().describe("ID of the consumer which you want to get or push data from"), "x-apideck-app-id": z.string().describe("The ID of your Unify application"), "x-apideck-service-id": z.string().describe("Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.").optional() }).optional(), "body": z.object({ "close_date": z.string().date().nullable().describe("The actual closing date for the opportunity. If close_date is null, the opportunity is not closed yet.").optional(), "company_id": z.string().nullable().describe("The unique identifier of the company associated with the opportunity.").optional(), "company_name": z.string().nullable().describe("The name of the company associated with the opportunity.").optional(), "contact_id": z.string().nullable().describe("The unique identifier of the contact associated with the opportunity.").optional(), "contact_ids": z.array(z.string()).describe("An array of unique identifiers of all contacts associated with the opportunity.").optional(), "created_at": z.string().datetime({ offset: true }).describe("The date and time when the opportunity was created.").readonly().optional(), "created_by": z.string().nullable().describe("The unique identifier of the user who created the opportunity.").readonly().optional(), "currency": z.enum(["UNKNOWN_CURRENCY","AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTN","BWP","BYR","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","SSP","STD","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRC","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","USS","UYI","UYU","UZS","VEF","VND","VUV","WST","XAF","XAG","XAU","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XTS","XXX","YER","ZAR","ZMK","ZMW","BTC","ETH"]).nullable().describe("Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).").optional(), "custom_fields": z.array(z.object({ "description": z.string().describe("More information about the custom field").optional(), "id": z.string(), "name": z.string().describe("Name of the custom field.").optional(), "value": z.union([z.string().nullable(), z.number().nullable(), z.boolean().nullable(), z.array(z.string())]).optional() }).strict()).optional(), "date_last_contacted": z.string().datetime({ offset: true }).nullable().describe("The date and time when the opportunity was last contacted.").readonly().optional(), "date_lead_created": z.string().datetime({ offset: true }).nullable().describe("The date and time when the lead associated with the opportunity was created.").readonly().optional(), "date_stage_changed": z.string().datetime({ offset: true }).nullable().describe("The date and time when the stage of the opportunity was last changed.").readonly().optional(), "deleted": z.boolean().describe("Indicates whether the opportunity has been deleted.").readonly().optional(), "description": z.string().nullable().describe("A description of the opportunity.").optional(), "expected_revenue": z.number().nullable().describe("The expected revenue from the opportunity").readonly().optional(), "id": z.string().describe("A unique identifier for the opportunity.").readonly().optional(), "interaction_count": z.number().nullable().describe("The number of interactions with the opportunity.").readonly().optional(), "last_activity_at": z.string().nullable().describe("The date and time of the last activity associated with the opportunity.").readonly().optional(), "lead_id": z.string().nullable().describe("The unique identifier of the lead associated with the opportunity.").optional(), "lead_source": z.string().nullable().describe("The source of the lead associated with the opportunity.").optional(), "loss_reason": z.string().nullable().describe("The reason why the opportunity was lost.").optional(), "loss_reason_id": z.string().nullable().describe("The unique identifier of the reason why the opportunity was lost.").optional(), "monetary_amount": z.number().nullable().describe("The monetary value associated with the opportunity").optional(), "owner_id": z.string().nullable().describe("The unique identifier of the user who owns the opportunity.").optional(), "pipeline_id": z.string().nullable().describe("The unique identifier of the pipeline associated with the opportunity").optional(), "pipeline_stage_id": z.string().nullable().describe("The unique identifier of the stage in the pipeline associated with the opportunity.").optional(), "primary_contact_id": z.string().nullable().describe("The unique identifier of the primary contact associated with the opportunity."), "priority": z.string().nullable().describe("The priority level of the opportunity.").optional(), "source_id": z.string().nullable().describe("The unique identifier of the source of the opportunity.").optional(), "stage_last_changed_at": z.string().datetime({ offset: true }).nullable().describe("The date and time when the stage of the opportunity was last changed.").optional(), "status": z.string().nullable().describe("The current status of the opportunity.").optional(), "status_id": z.string().nullable().describe("The unique identifier of the current status of the opportunity.").optional(), "tags": z.array(z.string()).optional(), "title": z.string().min(1).describe("The title or name of the opportunity."), "type": z.string().nullable().describe("The type of the opportunity").optional(), "updated_at": z.string().datetime({ offset: true }).describe("The date and time when the opportunity was last updated.").readonly().optional(), "updated_by": z.string().nullable().describe("The unique identifier of the user who last updated the opportunity.").readonly().optional(), "win_probability": z.number().nullable().describe("The probability of winning the opportunity, expressed as a percentage.").optional(), "won_reason": z.string().nullable().describe("The reason why the opportunity was won.").optional(), "won_reason_id": z.string().nullable().describe("The unique identifier of the reason why the opportunity was won.").optional() }).strict().optional() }).shape