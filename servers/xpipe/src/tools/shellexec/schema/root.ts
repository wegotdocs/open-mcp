import { z } from "zod"

export const inputParamsSchema = {
  "connection": z.string().describe("The connection uuid"),
  "command": z.string().describe("The command to execute")
}