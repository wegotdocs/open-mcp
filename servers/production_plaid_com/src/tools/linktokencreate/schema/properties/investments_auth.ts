import { z } from "zod"

export const inputParamsSchema = {
  "manual_entry_enabled": z.boolean().nullable().describe("If `true`, show institutions that use the manual entry fallback flow.").optional(),
  "masked_number_match_enabled": z.boolean().nullable().describe("If `true`, show institutions that use the masked number match fallback flow.").optional(),
  "stated_account_number_enabled": z.boolean().nullable().describe("If `true`, show institutions that use the stated account number fallback flow.").optional(),
  "rollover_401k_enabled": z.boolean().nullable().describe("If `true`, the fee and contribution details for 401k accounts will be returned.").optional()
}