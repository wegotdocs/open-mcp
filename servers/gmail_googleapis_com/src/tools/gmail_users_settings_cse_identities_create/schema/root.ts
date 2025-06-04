import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("The requester's primary email address. To indicate the authenticated user, you can use the special value `me`."),
  "emailAddress": z.string().describe("The email address for the sending identity. The email address must be the primary email address of the authenticated user.").optional(),
  "primaryKeyPairId": z.string().describe("If a key pair is associated, the identifier of the key pair, CseKeyPair.").optional()
}