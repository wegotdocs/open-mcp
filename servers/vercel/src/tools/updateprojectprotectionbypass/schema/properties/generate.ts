import { z } from "zod"

export const inputParamsSchema = {
  "secret": z.string().regex(new RegExp("^[a-zA-Z0-9]{32}$")).describe("Optional value of the secret to generate").optional()
}