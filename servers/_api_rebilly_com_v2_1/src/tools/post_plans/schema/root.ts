import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "name": z.string().describe("The plan name"),
  "currency": z.string().describe("Currency (three letter ISO 4217 code)"),
  "currencySign": z.string().describe("Currency sign").optional(),
  "isActive": z.boolean().describe("If the plan is not active, customers cannot subscribe to the plan (default to true)").optional(),
  "description": z.string().describe("The plan description").optional(),
  "richDescription": z.string().describe("The plan rich description - supports HTML").optional(),
  "recurringAmount": z.number().describe("The amount that recurs according to the schedule").optional(),
  "recurringPeriodUnit": z.enum(["day","week","month","year"]).describe("The unit of time").optional(),
  "recurringPeriodLength": z.number().int().describe("The length of time (used with the recurringPeriodUnit)").optional(),
  "trialAmount": z.number().describe("The amount of a trial - 0 is a valid value (for free)").optional(),
  "trialPeriodUnit": z.enum(["day","week","month","year"]).describe("The unit of time").optional(),
  "trialPeriodLength": z.number().int().describe("The length of time (used with the trialPeriodUnit)").optional(),
  "setupAmount": z.number().describe("The amount of a trial - 0 is a valid value (for free)").optional(),
  "expiredTime": z.string().datetime({ offset: true }).describe("Time when the plan is not longer valid").optional(),
  "contractTermUnit": z.enum(["day","week","month","year"]).describe("The unit of time").optional(),
  "contractTermLength": z.number().int().describe("The length that corresponds with the contractTermUnit").optional(),
  "recurringPeriodLimit": z.number().int().describe("The number of times a subscription will rebill until the contract is over").optional(),
  "minQuantity": z.number().int().describe("Minimum quantity per order, defaults to 1").optional(),
  "maxQuantity": z.number().int().describe("Maximum quantity per order (NULL if no maximum)").optional(),
  "createdTime": z.string().optional(),
  "updatedTime": z.string().optional(),
  "_links": z.array(z.string()).min(1).max(1).describe("The links related to resource").readonly().optional()
}