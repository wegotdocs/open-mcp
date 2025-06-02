import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The ID or legacyId of the blockchain")
}