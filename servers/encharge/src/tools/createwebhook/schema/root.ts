import { z } from "zod"

export const inputParamsSchema = {
  "eventType": z.string().describe("Event to trigger on"),
  "targetUrl": z.string()
}