import { z } from "zod"

export const inputParamsSchema = {
  "allow_unverified_crypto_wallets": z.boolean().describe("If `true`, allow self-custody crypto wallets to be added without requiring signature verification. Defaults to `false`.").optional(),
  "allow_manual_entry": z.boolean().describe("If `true`, allow users to manually enter Investments account and holdings information. Defaults to `false`.").optional()
}