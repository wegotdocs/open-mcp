import { z } from "zod"

export const inputParamsSchema = {
  "invites": z.array(z.object({ "name": z.string().describe("The full name of the user being invited").optional(), "email": z.string().describe("The email address to invite").optional(), "role": z.enum(["admin","member","viewer","guest"]).optional() }))
}