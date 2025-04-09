import { z } from "zod"

export const inputParams = {
  "certificate_id": z.string().uuid().describe("A unique identifier for a certificate.")
}