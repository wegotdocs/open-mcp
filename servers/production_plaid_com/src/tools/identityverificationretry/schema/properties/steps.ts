import { z } from "zod"

export const inputParamsSchema = {
  "verify_sms": z.boolean().describe("A boolean field specifying whether the new session should require or skip the `verify_sms` step."),
  "kyc_check": z.boolean().describe("A boolean field specifying whether the new session should require or skip the `kyc_check` (Data Source Verification) step."),
  "documentary_verification": z.boolean().describe("A boolean field specifying whether the new session should require or skip the `documentary_verification` step."),
  "selfie_check": z.boolean().describe("A boolean field specifying whether the new session should require or skip the `selfie_check` step.")
}