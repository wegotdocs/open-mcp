import { z } from "zod"

export const inputParamsSchema = {
  "secret_name": z.string().describe("The name of the secret.")
}