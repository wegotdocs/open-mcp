import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "alert_number": z.number().int().describe("The security alert number.").readonly(),
  "state": z.enum(["dismissed","open"]).describe("The state of the Dependabot alert.\nA `dismissed_reason` must be provided when setting the state to `dismissed`."),
  "dismissed_reason": z.enum(["fix_started","inaccurate","no_bandwidth","not_used","tolerable_risk"]).describe("**Required when `state` is `dismissed`.** A reason for dismissing the alert.").optional(),
  "dismissed_comment": z.string().max(280).describe("An optional comment associated with dismissing the alert.").optional()
}