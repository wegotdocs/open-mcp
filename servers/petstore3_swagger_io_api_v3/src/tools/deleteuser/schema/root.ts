import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string().describe("The name that needs to be deleted")
}