import { z } from "zod"

export const inputParamsSchema = {
  "visibility": z.enum(["public","private"]).describe("Denotes whether an email is publicly visible.")
}