import { z } from "zod"

export const inputParamsSchema = {
  "processingStatus": z.enum(["DRAFT","PROFORMA","PLANNED_ISSUANCE","ISSUED"]),
  "invoiceType": z.enum(["CLIENT","PROVIDER","TPV"])
}