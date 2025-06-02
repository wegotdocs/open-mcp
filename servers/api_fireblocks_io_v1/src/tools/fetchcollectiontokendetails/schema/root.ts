import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The collection link id"),
  "tokenId": z.string().describe("The tokenId as it appears on the blockchain")
}