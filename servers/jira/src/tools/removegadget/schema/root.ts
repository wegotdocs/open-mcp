import { z } from "zod"

export const inputParamsSchema = {
  "dashboardId": z.number().int().describe("The ID of the dashboard."),
  "gadgetId": z.number().int().describe("The ID of the gadget.")
}