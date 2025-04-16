import { z } from "zod"

export const inputParamsSchema = {
  "enum_option": z.string().describe("The gid of the enum option to relocate."),
  "before_enum_option": z.string().describe("An existing enum option within this custom field before which the new enum option should be inserted. Cannot be provided together with after_enum_option.").optional(),
  "after_enum_option": z.string().describe("An existing enum option within this custom field after which the new enum option should be inserted. Cannot be provided together with before_enum_option.").optional()
}