import { z } from "zod"

export const inputParamsSchema = {
  "certificate_id": z.string().uuid().describe("A unique identifier for a certificate.")
}