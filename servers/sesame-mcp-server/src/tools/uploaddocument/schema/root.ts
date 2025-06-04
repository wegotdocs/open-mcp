import { z } from "zod"

export const inputParamsSchema = {
  "directoryId": z.string().uuid().describe("Directory UUID")
}