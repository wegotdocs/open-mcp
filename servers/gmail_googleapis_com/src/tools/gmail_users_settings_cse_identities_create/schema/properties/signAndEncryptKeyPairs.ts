import { z } from "zod"

export const inputParamsSchema = {
  "encryptionKeyPairId": z.string().describe("The ID of the CseKeyPair that encrypts signed outgoing mail.").optional(),
  "signingKeyPairId": z.string().describe("The ID of the CseKeyPair that signs outgoing mail.").optional()
}