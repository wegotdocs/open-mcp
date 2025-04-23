import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("String ID of directory. Starts with `dir_`.")
}