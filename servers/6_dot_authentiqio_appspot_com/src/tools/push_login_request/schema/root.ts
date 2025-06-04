import { z } from "zod"

export const inputParamsSchema = {
  "callback": z.string().describe("URI App will connect to")
}