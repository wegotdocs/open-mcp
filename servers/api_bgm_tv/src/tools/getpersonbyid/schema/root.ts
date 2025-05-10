import { z } from "zod"

export const inputParamsSchema = {
  "person_id": z.number().int().gte(1).describe("人物 ID")
}