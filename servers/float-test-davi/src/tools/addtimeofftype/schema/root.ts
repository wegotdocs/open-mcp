import { z } from "zod"

export const inputParamsSchema = {
  "timeoff_type_id": z.number().int().describe("The ID of this time off type").readonly().optional(),
  "timeoff_type_name": z.string().describe("The name of this time off type. Note that the name \"*\" is reserved"),
  "color": z.string().describe("Time off type's color in hexadecimal").optional(),
  "active": z.number().int().describe("Shows if the time off type is `1` = active or `0` = archived ").optional(),
  "created_by": z.number().int().describe("Account ID of the person who created this record").readonly().optional()
}