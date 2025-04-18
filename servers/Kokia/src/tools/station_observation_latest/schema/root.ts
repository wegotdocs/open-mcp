import { z } from "zod"

export const inputParamsSchema = {
  "require_qc": z.boolean().describe("Require QC").optional()
}