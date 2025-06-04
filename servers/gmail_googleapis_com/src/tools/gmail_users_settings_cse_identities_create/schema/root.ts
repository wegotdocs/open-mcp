import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("The requester's primary email address. To indicate the authenticated user, you can use the special value `me`."),
  "emailAddress": z.string().describe("The email address for the sending identity. The email address must be the primary email address of the authenticated user.").optional(),
  "primaryKeyPairId": z.string().describe("If a key pair is associated, the ID of the key pair, CseKeyPair.").optional(),
  "signAndEncryptKeyPairs": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `signAndEncryptKeyPairs` to the tool, first call the tool `expandSchema` with \"/properties/signAndEncryptKeyPairs\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The configuration of a CSE identity that uses different key pairs for signing and encryption.</property-description>").optional()
}