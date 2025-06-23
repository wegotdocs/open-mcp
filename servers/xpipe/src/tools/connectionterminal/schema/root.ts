import { z } from "zod"

export const inputParamsSchema = {
  "directory": z.string().describe("The optional directory to use as the working directory"),
  "connection": z.string().describe("The connection uuid")
}