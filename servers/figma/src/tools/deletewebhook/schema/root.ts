import { z } from "zod"

export const inputParams = {
  "webhook_id": z.string().describe("ID of webhook to delete")
}