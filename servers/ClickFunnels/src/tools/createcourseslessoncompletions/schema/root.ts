import { z } from "zod"

export const inputParamsSchema = {
  "course_id": z.number().int(),
  "courses_lesson_completion": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `courses_lesson_completion` to the tool, first call the tool `expandSchema` with \"/properties/courses_lesson_completion\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Completed lessons</property-description>").optional()
}