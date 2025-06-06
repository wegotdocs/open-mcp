import { z } from "zod"

export const inputParamsSchema = {
  "result_id": z.string(),
  "reviewTime": z.number().int().describe("The time it took to review the result in seconds."),
  "answers": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `answers` to the tool, first call the tool `expandSchema` with \"/properties/answers\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The clinical notes generated for the consultation reviewed by the doctor.</property-description>"),
  "multiAnswers": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `multiAnswers` to the tool, first call the tool `expandSchema` with \"/properties/multiAnswers\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>In case of a multi-consultation visit, those fields which change from one reason to another, reviewed by the doctor.</property-description>"),
  "title": z.union([z.string(), z.null()]).describe("The title of the consultation.").optional()
}