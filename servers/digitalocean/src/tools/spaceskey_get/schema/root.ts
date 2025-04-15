import { z } from "zod"

export const inputParamsSchema = {
  "access_key": z.string().describe("The access key's ID.")
}