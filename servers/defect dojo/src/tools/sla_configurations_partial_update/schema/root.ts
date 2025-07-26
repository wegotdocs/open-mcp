import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this sl a_ configuration."),
  "name": z.string().min(1).max(128).describe("A unique name for the set of SLAs.").optional(),
  "description": z.string().max(512).nullable().optional(),
  "critical": z.number().int().gte(-2147483648).lte(2147483647).describe("The number of days to remediate a critical finding.").optional(),
  "enforce_critical": z.boolean().describe("When enabled, critical findings will be assigned an SLA expiration date based on the critical finding SLA days within this SLA configuration.").optional(),
  "high": z.number().int().gte(-2147483648).lte(2147483647).describe("The number of days to remediate a high finding.").optional(),
  "enforce_high": z.boolean().describe("When enabled, high findings will be assigned an SLA expiration date based on the high finding SLA days within this SLA configuration.").optional(),
  "medium": z.number().int().gte(-2147483648).lte(2147483647).describe("The number of days to remediate a medium finding.").optional(),
  "enforce_medium": z.boolean().describe("When enabled, medium findings will be assigned an SLA expiration date based on the medium finding SLA days within this SLA configuration.").optional(),
  "low": z.number().int().gte(-2147483648).lte(2147483647).describe("The number of days to remediate a low finding.").optional(),
  "enforce_low": z.boolean().describe("When enabled, low findings will be assigned an SLA expiration date based on the low finding SLA days within this SLA configuration.").optional()
}