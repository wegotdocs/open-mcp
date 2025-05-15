import { z } from "zod"

export const inputParamsSchema = {
  "PartnerRoute": z.array(z.object({ "StandardRoute": z.array(z.object({ "DocumentTypeRoute": z.array(z.object({ "documentType": z.string().optional(), "processId": z.string().optional() })).optional(), "processId": z.string().optional(), "standard": z.enum(["x12","edifact","hl7","custom","rosettanet","tradacoms","odette"]).optional() })).optional(), "processId": z.string().optional(), "tradingPartnerId": z.string().optional() })).optional(),
  "processId": z.string().optional()
}