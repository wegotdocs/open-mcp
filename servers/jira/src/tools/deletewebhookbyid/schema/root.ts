import { z } from "zod"

export const inputParams = {
  "webhookIds": z.array(z.number().int().describe("A list of webhook IDs.")).describe("A list of webhook IDs.")
}