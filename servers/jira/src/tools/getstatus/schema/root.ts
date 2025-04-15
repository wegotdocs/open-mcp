import { z } from "zod"

export const inputParamsSchema = {
  "idOrName": z.string().describe("The ID or name of the status.")
}