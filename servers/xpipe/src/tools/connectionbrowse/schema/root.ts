import { z } from "zod"

export const inputParamsSchema = {
  "directory": z.string().describe("The optional directory to browse to"),
  "connection": z.string().describe("The connection uuid")
}