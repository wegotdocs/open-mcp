import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string().describe("Username"),
  "password": z.string().describe("Password")
}