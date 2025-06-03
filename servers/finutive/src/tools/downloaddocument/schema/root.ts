import { z } from "zod"

export const inputParamsSchema = {
  "tokenId": z.string().describe("Ephemeral token ID for document access")
}