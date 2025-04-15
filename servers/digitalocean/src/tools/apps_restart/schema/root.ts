import { z } from "zod"

export const inputParamsSchema = {
  "app_id": z.string().describe("The app ID"),
  "components": z.array(z.string()).optional()
}