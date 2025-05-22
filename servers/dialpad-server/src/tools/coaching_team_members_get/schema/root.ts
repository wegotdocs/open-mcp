import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Id of the coaching team")
}