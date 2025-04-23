import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for Directory. Starts with `dir_`.")
}