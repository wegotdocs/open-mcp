import { z } from "zod"

export const inputParamsSchema = {
  "format": z.string(),
  "definition": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `definition` to the tool, first call the tool `expandSchema` with \"/properties/definition\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Either provide `definition` or `caseReportTemplateId`</property-description>").optional(),
  "caseReportTemplateId": z.string().describe("Either provide `definition` or `caseReportTemplateId`").optional(),
  "caseId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)").optional(),
  "maxElements": z.number().int().gt(0).describe("Limit the number of elements in tables and lists, useful for a preview").optional()
}