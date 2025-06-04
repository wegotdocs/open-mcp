import { z } from "zod"

export const inputParamsSchema = {
  "trainingId": z.string().uuid().describe("Training ID")
}