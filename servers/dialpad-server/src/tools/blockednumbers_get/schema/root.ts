import { z } from "zod"

export const inputParamsSchema = {
  "number": z.string().describe("A phone number (e164 format).")
}