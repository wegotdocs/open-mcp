import { z } from "zod"

export const inputParams = {
  "bill_nos": z.array(z.string()).describe("月账单号集合，唯一性ID集合，月账单表唯一主键ID集合").optional(),
  "out_biz_type": z.string().describe("来源类型，01：主站；02：芝麻；03：金融云；04：微贷").optional()
}