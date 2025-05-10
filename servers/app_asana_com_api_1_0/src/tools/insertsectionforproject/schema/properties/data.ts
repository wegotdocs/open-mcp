import { z } from "zod"

export const inputParamsSchema = {
  "section": z.string().describe("The section to reorder."),
  "before_section": z.string().describe("Insert the given section immediately before the section specified by this parameter.").optional(),
  "after_section": z.string().describe("Insert the given section immediately after the section specified by this parameter.").optional()
}