import { z } from "zod"

export const inputParamsSchema = {
  "uuid": z.string().describe("Knowledge base id")
}