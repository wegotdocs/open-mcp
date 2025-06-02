import { z } from "zod"

export const inputParamsSchema = {
  "keyId": z.string().describe("The unique identifier for the signing key provided by Fireblocks"),
  "agentUserId": z.string().min(36).max(36).describe("Id of user that represent agent servers which signs with the key")
}