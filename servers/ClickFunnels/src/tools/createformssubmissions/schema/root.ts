import { z } from "zod"

export const inputParamsSchema = {
  "form_id": z.number().int(),
  "forms_submission": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `forms_submission` to the tool, first call the tool `expandSchema` with \"/properties/forms_submission\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Submissions</property-description>").optional()
}