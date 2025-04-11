import { z } from "zod"

export const inputParams = {
  "require_qc": z.boolean().describe("Require QC").optional()
}