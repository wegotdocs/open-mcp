import { z } from "zod"

export const inputParamsSchema = {
  "valname": z.string().regex(new RegExp("^[^.]+.[^.]+$")).describe("Name of the val, in concatenated style, like username.valname"),
  "args": z.array(z.any()).optional()
}