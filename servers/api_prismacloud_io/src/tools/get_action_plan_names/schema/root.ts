import { z } from "zod"

export const inputParamsSchema = {
  "x-redlock-auth": z.string().describe("Authorize using Authentication token")
}