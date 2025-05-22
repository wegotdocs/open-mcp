import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("唯一ID")
}