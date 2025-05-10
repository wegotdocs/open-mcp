import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Required. The repository's name.")
}