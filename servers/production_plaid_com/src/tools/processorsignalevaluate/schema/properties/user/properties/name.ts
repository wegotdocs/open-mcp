import { z } from "zod"

export const inputParamsSchema = {
  "prefix": z.string().nullable().describe("The user's name prefix (e.g. \"Mr.\")").optional(),
  "given_name": z.string().nullable().describe("The user's given name. If the user has a one-word name, it should be provided in this field.").optional(),
  "middle_name": z.string().nullable().describe("The user's middle name").optional(),
  "family_name": z.string().nullable().describe("The user's family name / surname").optional(),
  "suffix": z.string().nullable().describe("The user's name suffix (e.g. \"II\")").optional()
}