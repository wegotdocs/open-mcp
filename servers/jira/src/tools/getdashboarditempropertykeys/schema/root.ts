import { z } from "zod"

export const inputParamsSchema = {
  "dashboardId": z.string().describe("The ID of the dashboard."),
  "itemId": z.string().describe("The ID of the dashboard item.")
}