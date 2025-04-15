import { z } from "zod"

export const inputParamsSchema = {
  "idOrKey": z.string().describe("The ID or key of the status category.")
}