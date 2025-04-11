import { z } from "zod"

export const inputParams = {
  "day_of_week": z.number().int().gte(1).lte(7).describe("The numeric reference for the day of the week to perform maintenance. `1` is Monday, `2` is Tuesday, through to `7` which is Sunday.").optional(),
  "duration": z.number().int().gte(1).lte(3).describe("The maximum maintenance window time in hours.").optional(),
  "frequency": z.literal("weekly").describe("How frequently maintenance occurs. Currently can only be `weekly`.").optional(),
  "hour_of_day": z.number().int().gte(0).lte(23).describe("The hour to begin maintenance based in UTC time.").optional(),
  "pending": z.array(z.object({ "deadline": z.string().datetime({ offset: true }).nullable().describe("The time when a mandatory update needs to be applied.").optional(), "description": z.string().describe("A description of the update.").optional(), "planned_for": z.string().datetime({ offset: true }).nullable().describe("The date and time a maintenance update will be applied.").optional() }).describe("A planned maintenance update.")).describe("__Read-only__ An array of pending updates.").readonly().optional()
}