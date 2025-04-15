import { z } from "zod"

export const inputParams = {
  "mcc_code_list": z.string().describe("传入需要查询的code列表，以英文逗号分隔").optional()
}