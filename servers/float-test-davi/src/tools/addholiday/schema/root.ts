import { z } from "zod"

export const inputParamsSchema = {
  "holiday_id": z.number().int().describe("The ID of this team holiday").readonly().optional(),
  "name": z.string().max(200).describe("The name of the team holiday"),
  "date": z.string().describe("Date of the team holiday"),
  "end_date": z.string().describe("End date of the team holiday if more than 1 day").optional()
}