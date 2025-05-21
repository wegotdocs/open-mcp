import { z } from "zod"

export const inputParamsSchema = {
  "firstName": z.string().describe("First name of the user"),
  "lastName": z.string().describe("Last name of the user")
}