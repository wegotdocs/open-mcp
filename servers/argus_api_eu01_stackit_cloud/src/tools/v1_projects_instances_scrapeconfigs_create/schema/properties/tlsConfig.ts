import { z } from "zod"

export const inputParamsSchema = {
  "insecureSkipVerify": z.boolean().describe("Disable validation of the server certificate.").optional()
}