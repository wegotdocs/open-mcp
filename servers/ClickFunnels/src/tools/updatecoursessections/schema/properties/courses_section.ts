import { z } from "zod"

export const inputParamsSchema = {
  "title": z.string().describe("Title").optional(),
  "description": z.union([z.string().describe("Description"), z.null().describe("Description")]).describe("Description").optional(),
  "days_till_drip_access": z.union([z.number().int().describe("Days until drip access"), z.null().describe("Days until drip access")]).describe("Days until drip access").optional(),
  "blocker_section_id": z.number().int().nullable().describe("Blocker section").optional(),
  "blocker_lesson_id": z.number().int().nullable().describe("Blocker lesson").optional(),
  "is_hidden_from_non_members": z.union([z.boolean().describe("Current Path"), z.null().describe("Current Path")]).describe("Current Path").optional()
}