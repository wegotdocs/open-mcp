import { z } from "zod"

export const inputParamsSchema = {
  "equipId": z.string().uuid().describe("Unique identifier of the Equipment"),
  "from": z.string().date().describe("Start date of the Occurrence for which Equipment Occurrences are requested"),
  "to": z.string().date().describe("End date of the Occurrence for which Equipment Occurrences are requested").optional(),
  "ruleIds": z.array(z.string().uuid()).describe("List of unique Rule IDs for which Equipment Occurrences are requested").optional()
}