import { z } from "zod"

export const inputParamsSchema = {
  "PK": z.string().describe("Public Signing Key - Authentiq ID (43 chars)")
}