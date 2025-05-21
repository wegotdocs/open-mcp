import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().describe("Phrase ID"),
  "phrase": z.string().describe("The phrase to update").optional(),
  "scheduleStringDate": z.string().describe("Scheduled date in string format").optional(),
  "groupsIds": z.array(z.number()).describe("List of group IDs to update").optional()
}