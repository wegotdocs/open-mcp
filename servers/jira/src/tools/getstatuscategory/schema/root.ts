import { z } from "zod"

export const inputParams = {
  "idOrKey": z.string().describe("The ID or key of the status category.")
}