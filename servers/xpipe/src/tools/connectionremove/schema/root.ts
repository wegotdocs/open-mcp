import { z } from "zod"

export const inputParamsSchema = {
  "connections": z.array(z.string().describe("The unique id of the connection")).describe("The connections to remove")
}