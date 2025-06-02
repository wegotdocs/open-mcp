import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The ID of the existing Web3 connection to remove.")
}