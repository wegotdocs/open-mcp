import { z } from "zod"

export const inputParams = {
  "activity_id": z.string().describe("活动id").optional()
}