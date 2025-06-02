import { z } from "zod"

export const inputParamsSchema = {
  "configId": z.string().describe("The created configuration unique identifier")
}