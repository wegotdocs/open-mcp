import { z } from "zod"

export const inputParamsSchema = {
  "template_id": z.string(),
  "consent": z.string().optional(),
  "gave_consent": z.boolean().describe("A flag specifying whether the end user has already agreed to a privacy policy specifying that their data will be shared with Plaid for verification purposes.\n\nIf `gave_consent` is set to `true`, the `accept_tos` step will be marked as `skipped` and the end user's session will start at the next step requirement.").optional()
}