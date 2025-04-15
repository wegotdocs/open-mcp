import { z } from "zod"

export const inputParams = {
  "box_id": z.string().describe("指定搜索直达区域").optional()
}