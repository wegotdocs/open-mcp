import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("接口 ID")
}