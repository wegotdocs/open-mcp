import { z } from "zod"

export const inputParamsSchema = {
  "pointId": z.string().uuid().describe("Unique identifier of the Point")
}