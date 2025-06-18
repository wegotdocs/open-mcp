import { z } from "zod"

export const inputParamsSchema = {
  "location": z.string(),
  "transferId": z.string().uuid().describe("Represents an uuid")
}