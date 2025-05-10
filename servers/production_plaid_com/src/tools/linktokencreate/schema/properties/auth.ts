import { z } from "zod"

export const inputParamsSchema = {
  "auth_type_select_enabled": z.boolean().describe("Specifies whether Auth Type Select is enabled for the Link session, allowing the end user to choose between linking via a credentials-based flow (i.e. Instant Auth, Instant Match, Automated Micro-deposits) or a manual flow that does not require login (all other Auth flows) prior to selecting their financial institution. Default behavior is `false`.").optional(),
  "automated_microdeposits_enabled": z.boolean().describe("Specifies whether the Link session is enabled for the Automated Micro-deposits flow. Default behavior is `false`.").optional(),
  "instant_match_enabled": z.boolean().describe("Specifies whether the Link session is enabled for the Instant Match flow. Instant Match is enabled by default. Instant Match can be disabled by setting this field to `false`.").optional(),
  "same_day_microdeposits_enabled": z.boolean().describe("Specifies whether the Link session is enabled for the Same Day Micro-deposits flow.  Default behavior is `false`.").optional(),
  "instant_microdeposits_enabled": z.boolean().describe("Specifies whether the Link session is enabled for the Instant Micro-deposits flow.  Default behavior for Plaid teams created after November 2023 is `false`; default behavior for Plaid teams created before that date is `true`.").optional(),
  "reroute_to_credentials": z.enum(["OFF","OPTIONAL","FORCED"]).describe("Specifies what type of [Reroute to Credentials](https://plaid.com/docs/auth/coverage/same-day/#reroute-to-credentials) pane should be used in the Link session for the Same Day Micro-deposits flow. Default behavior is `OPTIONAL`.").optional(),
  "sms_microdeposits_verification_enabled": z.boolean().describe("Specifies whether the Link session is enabled for SMS micro-deposits verification. Default behavior is `true`.").optional()
}