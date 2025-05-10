import { z } from "zod"

export const inputParamsSchema = {
  "valname": z.string().regex(new RegExp("^[^.]+.[^.]+$")).describe("Name of the val, in concatenated style, like username.valname"),
  "args": z.string().describe("An argument that will be passed to the function as a JavaScript value").optional()
}