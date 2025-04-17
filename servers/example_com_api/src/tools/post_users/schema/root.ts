import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The unique identifier of the user"),
  "name": z.string().describe("The name of the user"),
  "email": z.string().email().describe("The email address of the user")
}