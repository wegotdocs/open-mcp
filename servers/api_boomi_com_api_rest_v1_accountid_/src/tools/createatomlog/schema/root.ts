import { z } from "zod"

export const inputParamsSchema = {
  "atomId": z.string().describe("The ID of the Runtime.").optional(),
  "includeBin": z.boolean().describe("If true, binary files are included in the download. The default is false.").optional(),
  "logDate": z.string().describe("The date of the logged events.").optional()
}