import { z } from "zod"

export const inputParamsSchema = {
  "TaxCode": z.string().optional(),
  "TaxRateDetails": z.array(z.object({ "RateValue": z.string().optional(), "TaxAgencyId": z.string().optional(), "TaxApplicableOn": z.string().optional(), "TaxRateName": z.string().optional() })).optional()
}