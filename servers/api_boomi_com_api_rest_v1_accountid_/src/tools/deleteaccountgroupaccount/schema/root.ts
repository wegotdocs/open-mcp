import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The object’s conceptual ID from which the account and account group IDs synthesizes.")
}