import { z } from "zod"

export const inputParams = {
  "crowd_id": z.string().describe("指定人群ID").optional()
}