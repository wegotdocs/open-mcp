import { z } from "zod"

export const inputParamsSchema = {
  "connectionId": z.string().describe("The ID of the connection")
}