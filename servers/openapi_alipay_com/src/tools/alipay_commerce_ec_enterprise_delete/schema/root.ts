import { z } from "zod"

export const inputParams = {
  "enterprise_id": z.string().describe("企业id").optional()
}