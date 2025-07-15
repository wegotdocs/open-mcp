import { z } from "zod"

export const inputParamsSchema = {
  "people_id": z.number().int().describe("people id to delete")
}