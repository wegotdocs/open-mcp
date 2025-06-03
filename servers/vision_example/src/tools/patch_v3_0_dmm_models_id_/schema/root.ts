import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().max(2048),
  "enabled": z.boolean().describe("The status of a detection model.")
}