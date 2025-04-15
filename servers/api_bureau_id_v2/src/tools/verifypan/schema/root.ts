import { z } from "zod"

export const inputParams = {
  "pan": z.string().describe("PAN (Permanent Account Number) to verify")
}