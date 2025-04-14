import { z } from "zod"

export const inputParams = {
  "category_code_list": z.array(z.string()).describe("类目列表，不超过五个").optional()
}