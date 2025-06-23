import { z } from "zod"

export const inputParamsSchema = {
  "connection": z.string().describe("The connection uuid"),
  "blob": z.string().describe("The blob uuid")
}