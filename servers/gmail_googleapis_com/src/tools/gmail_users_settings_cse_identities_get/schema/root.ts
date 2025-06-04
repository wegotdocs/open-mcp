import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("The requester's primary email address. To indicate the authenticated user, you can use the special value `me`."),
  "cseEmailAddress": z.string().describe("The primary email address associated with the client-side encryption identity configuration that's retrieved.")
}