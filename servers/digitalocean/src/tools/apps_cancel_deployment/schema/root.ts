import { z } from "zod"

export const inputParams = {
  "app_id": z.string().describe("The app ID"),
  "deployment_id": z.string().describe("The deployment ID")
}