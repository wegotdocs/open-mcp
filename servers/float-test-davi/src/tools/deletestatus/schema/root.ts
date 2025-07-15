import { z } from "zod"

export const inputParamsSchema = {
  "status_id": z.number().int().describe("status id to delete")
}