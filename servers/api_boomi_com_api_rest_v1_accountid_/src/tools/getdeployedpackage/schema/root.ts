import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The Deployed Package object you are attempting to DELETE.")
}