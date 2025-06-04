import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("The requester's primary email address. To indicate the authenticated user, you can use the special value `me`."),
  "keyPairId": z.string().describe("The identifier of the key pair to obliterate.")
}