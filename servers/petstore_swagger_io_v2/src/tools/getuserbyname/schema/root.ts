import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string().describe("The name that needs to be fetched. Use user1 for testing. ")
}