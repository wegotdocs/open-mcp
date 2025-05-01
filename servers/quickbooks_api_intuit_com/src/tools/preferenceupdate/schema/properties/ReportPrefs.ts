import { z } from "zod"

export const inputParamsSchema = {
  "CalcAgingReportFromTxnDate": z.boolean().optional(),
  "ReportBasis": z.string().optional()
}