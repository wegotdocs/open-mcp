import { z } from "zod"

export const inputParamsSchema = {
  "state": z.boolean().describe("The state to switch to"),
  "connection": z.string().describe("The connection uuid")
}