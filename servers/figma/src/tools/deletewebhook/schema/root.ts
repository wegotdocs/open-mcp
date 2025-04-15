import { z } from "zod"

export const inputParamsSchema = {
  "webhook_id": z.string().describe("ID of webhook to delete")
}