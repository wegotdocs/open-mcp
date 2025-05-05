import { z } from "zod"

export const inputParamsSchema = {
  "format": z.string(),
  "caseReportTemplateId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "caseId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)").optional(),
  "maxElements": z.number().int().gt(0).optional()
}