import { z } from "zod"

export const toolName = `submit_billing_data`
export const toolDescription = `Submit Billing Data`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/installations/{integrationConfigurationId}/billing`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "integrationConfigurationId"
  ],
  "cookie": [],
  "body": [
    "timestamp",
    "eod",
    "period",
    "billing",
    "usage"
  ]
}
export const flatMap = {}

export const inputParams = {
  "integrationConfigurationId": z.string(),
  "timestamp": z.string().datetime({ offset: true }).describe("Server time of your integration, used to determine the most recent data for race conditions & updates. Only the latest usage data for a given day, week, and month will be kept."),
  "eod": z.string().datetime({ offset: true }).describe("End of Day, the UTC datetime for when the end of the billing/usage day is in UTC time. This tells us which day the usage data is for, and also allows for your \\\"end of day\\\" to be different from UTC 00:00:00. eod must be within the period dates, and cannot be older than 24h earlier from our server's current time."),
  "period": z.object({ "start": z.string().datetime({ offset: true }), "end": z.string().datetime({ offset: true }) }).strict().describe("Period for the billing cycle. The period end date cannot be older than 24 hours earlier than our current server's time."),
  "billing": z.array(z.object({ "billingPlanId": z.string().describe("Partner's billing plan ID."), "resourceId": z.string().describe("Partner's resource ID.").optional(), "start": z.string().datetime({ offset: true }).describe("Start and end are only needed if different from the period's start/end.").optional(), "end": z.string().datetime({ offset: true }).describe("Start and end are only needed if different from the period's start/end.").optional(), "name": z.string().describe("Line item name."), "details": z.string().describe("Line item details.").optional(), "price": z.string().regex(new RegExp("^[0-9]+(\\\\.[0-9]+)?$")).describe("Price per unit."), "quantity": z.number().describe("Quantity of units."), "units": z.string().describe("Units of the quantity."), "total": z.string().regex(new RegExp("^[0-9]+(\\\\.[0-9]+)?$")).describe("Total amount.") }).strict()).describe("Billing data (interim invoicing data)."),
  "usage": z.array(z.object({ "resourceId": z.string().describe("Partner's resource ID.").optional(), "name": z.string().describe("Metric name."), "type": z.enum(["total","interval","rate"]).describe("\\n              Type of the metric.\\n              - total: measured total value, such as Database size\\n              - interval: usage during the period, such as i/o or number of queries.\\n              - rate: rate of usage, such as queries per second.\\n            "), "units": z.string().describe("Metric units. Example: \\\"GB\\\""), "dayValue": z.number().describe("Metric value for the day. Could be a final or an interim value for the day."), "periodValue": z.number().describe("Metric value for the billing period. Could be a final or an interim value for the period."), "planValue": z.number().describe("The limit value of the metric for a billing period, if a limit is defined by the plan.").optional() }).strict())
}