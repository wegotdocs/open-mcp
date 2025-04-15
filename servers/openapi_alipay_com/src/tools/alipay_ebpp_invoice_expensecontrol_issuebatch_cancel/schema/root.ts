import { z } from "zod"

export const inputParams = {
  "enterprise_id": z.string().describe("企业ID").optional(),
  "institution_id": z.string().describe("制度id").optional(),
  "issue_batch_id": z.string().describe("发放批次id").optional()
}