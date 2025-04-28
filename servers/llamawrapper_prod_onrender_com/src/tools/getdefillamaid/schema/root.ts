import { z } from "zod"

export const inputParamsSchema = {
  "text": z.string().describe("The name of the protocol")
}