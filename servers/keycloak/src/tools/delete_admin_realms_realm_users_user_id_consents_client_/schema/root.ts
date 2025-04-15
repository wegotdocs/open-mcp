import { z } from "zod"

export const inputParamsSchema = {
  "client": z.string().describe("Client id")
}