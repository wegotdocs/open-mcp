import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "state": z.literal("active").describe("The state that the membership should be in. Only `\"active\"` will be accepted.")
}