import { z } from "zod"

export const inputParamsSchema = {
  "filterSignals": z.boolean().optional(),
  "outboundDocumentValidation": z.boolean().optional(),
  "rejectDuplicateTransactions": z.boolean().optional(),
  "version": z.enum(["v11","v20"]).optional()
}