import { z } from "zod"

export const inputParamsSchema = {
  "version": z.number().int().readonly().optional(),
  "rules": z.array(z.object({ "name": z.string(), "status": z.enum(["active","inactive"]), "final": z.boolean().describe("Whether rule is final, meaning stop further matching rules if this is matched"), "criteria": z.object({ "op": z.enum(["and","or","not","between","equals","in","gt","gte","lt","lte"]).describe("The condition operation") }).optional(), "actions": z.array(z.object({ "name": z.enum(["blacklist","cancel-scheduled-payments","guess-payment-card-expiration","pick-gateway-account","schedule-payment-retry","schedule-payment","send-email","trigger-webhook","stop-subscriptions","add-risk-score"]).describe("The action name"), "status": z.enum(["active","inactive"]) })) }).describe("The rule")),
  "updatedTime": z.string().datetime({ offset: true }).describe("Read-only timestamp, automatically assigned on back-end.").readonly().optional(),
  "_links": z.array(z.string()).min(1).max(1).describe("The links related to resource").readonly().optional()
}