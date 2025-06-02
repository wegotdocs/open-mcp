import { z } from "zod"

export const inputParamsSchema = {
  "vaultAccountId": z.string().describe("The ID of the vault account, or 'default' for the default vault account"),
  "assetId": z.string().describe("The ID of the asset"),
  "manualSignging": z.boolean().describe("False by default. The maximum number of inputs depends if the transaction will be signed by an automated co-signer server or on a mobile device.").optional()
}