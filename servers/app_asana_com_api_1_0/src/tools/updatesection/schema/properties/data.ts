import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("The text to be displayed as the section name. This cannot be an empty string."),
  "insert_before": z.string().describe("An existing section within this project before which the added section should be inserted. Cannot be provided together with insert_after.").optional(),
  "insert_after": z.string().describe("An existing section within this project after which the added section should be inserted. Cannot be provided together with insert_before.").optional()
}