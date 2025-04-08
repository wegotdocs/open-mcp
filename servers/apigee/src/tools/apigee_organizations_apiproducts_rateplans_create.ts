import { z } from "zod"

export const toolName = `apigee_organizations_apiproducts_rateplans_create`
export const toolDescription = `Create a rate plan that is associated with an API product in an organization. Using rate plans, API product owners can monetize their API products by configuring one or more of the following: - Billing frequency - Initial setup fees for usi`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/rateplans`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "organizationsId",
    "apiproductsId"
  ],
  "cookie": [],
  "body": [
    "createdAt",
    "displayName",
    "revenueShareRates",
    "endTime",
    "billingPeriod",
    "fixedFeeFrequency",
    "name",
    "startTime",
    "lastModifiedAt",
    "consumptionPricingRates",
    "setupFee",
    "apiproduct",
    "description",
    "state",
    "consumptionPricingType",
    "revenueShareType",
    "fixedRecurringFee",
    "currencyCode"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "apiproductsId": z.string(),
  "createdAt": z.string().describe("Output only. Time that the rate plan was created in milliseconds since epoch.").readonly().optional(),
  "displayName": z.string().describe("Display name of the rate plan.").optional(),
  "revenueShareRates": z.array(z.object({ "sharePercentage": z.number().describe("Percentage of the revenue to be shared with the developer. For example, to share 21 percent of the total revenue with the developer, set this value to 21. Specify a decimal number with a maximum of two digits following the decimal point.").optional(), "start": z.string().describe("Starting value of the range. Set to 0 or `null` for the initial range of values.").optional(), "end": z.string().describe("Ending value of the range. Set to 0 or `null` for the last range of values.").optional() }).describe("API call volume range and the percentage of revenue to share with the developer when the total number of API calls is within the range.")).describe("Details of the revenue sharing model.").optional(),
  "endTime": z.string().describe("Time when the rate plan will expire in milliseconds since epoch. Set to 0 or `null` to indicate that the rate plan should never expire.").optional(),
  "billingPeriod": z.enum(["BILLING_PERIOD_UNSPECIFIED","WEEKLY","MONTHLY"]).describe("Frequency at which the customer will be billed.").optional(),
  "fixedFeeFrequency": z.number().int().describe("Frequency at which the fixed fee is charged.").optional(),
  "name": z.string().describe("Output only. Name of the rate plan.").readonly().optional(),
  "startTime": z.string().describe("Time when the rate plan becomes active in milliseconds since epoch.").optional(),
  "lastModifiedAt": z.string().describe("Output only. Time the rate plan was last modified in milliseconds since epoch.").readonly().optional(),
  "consumptionPricingRates": z.array(z.object({ "fee": z.object({ "currencyCode": z.string().describe("The three-letter currency code defined in ISO 4217.").optional(), "nanos": z.number().int().describe("Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.").optional(), "units": z.string().describe("The whole units of the amount. For example if `currencyCode` is `\"USD\"`, then 1 unit is one US dollar.").optional() }).describe("Fee to charge when total number of API calls falls within this range.").optional(), "end": z.string().describe("Ending value of the range. Set to 0 or `null` for the last range of values.").optional(), "start": z.string().describe("Starting value of the range. Set to 0 or `null` for the initial range of values.").optional() }).describe("API call volume range and the fees charged when the total number of API calls is within the range.")).describe("API call volume ranges and the fees charged when the total number of API calls is within a given range. The method used to calculate the final fee depends on the selected pricing model. For example, if the pricing model is `STAIRSTEP` and the ranges are defined as follows: ``` { \"start\": 1, \"end\": 100, \"fee\": 75 }, { \"start\": 101, \"end\": 200, \"fee\": 100 }, } ``` Then the following fees would be charged based on the total number of API calls (assuming the currency selected is `USD`): * 1 call costs $75 * 50 calls cost $75 * 150 calls cost $100 The number of API calls cannot exceed 200.").optional(),
  "setupFee": z.object({ "currencyCode": z.string().describe("The three-letter currency code defined in ISO 4217.").optional(), "nanos": z.number().int().describe("Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.").optional(), "units": z.string().describe("The whole units of the amount. For example if `currencyCode` is `\"USD\"`, then 1 unit is one US dollar.").optional() }).describe("Initial, one-time fee paid when purchasing the API product.").optional(),
  "apiproduct": z.string().describe("Name of the API product that the rate plan is associated with.").optional(),
  "description": z.string().describe("Description of the rate plan.").optional(),
  "state": z.enum(["STATE_UNSPECIFIED","DRAFT","PUBLISHED"]).describe("Current state of the rate plan (draft or published).").optional(),
  "consumptionPricingType": z.enum(["CONSUMPTION_PRICING_TYPE_UNSPECIFIED","FIXED_PER_UNIT","BANDED","TIERED","STAIRSTEP"]).describe("Pricing model used for consumption-based charges.").optional(),
  "revenueShareType": z.enum(["REVENUE_SHARE_TYPE_UNSPECIFIED","FIXED","VOLUME_BANDED"]).describe("Method used to calculate the revenue that is shared with developers.").optional(),
  "fixedRecurringFee": z.object({ "currencyCode": z.string().describe("The three-letter currency code defined in ISO 4217.").optional(), "nanos": z.number().int().describe("Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.").optional(), "units": z.string().describe("The whole units of the amount. For example if `currencyCode` is `\"USD\"`, then 1 unit is one US dollar.").optional() }).describe("Fixed amount that is charged at a defined interval and billed in advance of use of the API product. The fee will be prorated for the first billing period.").optional(),
  "currencyCode": z.string().describe("Currency to be used for billing. Consists of a three-letter code as defined by the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) standard.").optional()
}