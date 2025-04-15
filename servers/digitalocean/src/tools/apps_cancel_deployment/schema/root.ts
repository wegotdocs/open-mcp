import { z } from "zod"

export const inputParamsSchema = {
  "app_id": z.string().describe("The app ID"),
  "deployment_id": z.string().describe("The deployment ID")
}