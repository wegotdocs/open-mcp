import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("The name of the group.")
}