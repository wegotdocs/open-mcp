import { z } from "zod"

export const inputParams = {
  "end_date": z.string().describe("售卖结束时间。\t格式：yyyy-MM-dd HH:mm:ss\t如果永久有效则不传。").optional(),
  "price_detail": z.array(z.object({ "desc": z.string().describe("方案描述").optional(), "price": z.string().describe("售卖具体金额。单位为元。支持两位小数。").optional(), "price_type": z.string().describe("售卖金额类型").optional(), "worth": z.string().describe("价值。单位为元。支持两位小数").optional() })).describe("售卖方案列表").optional(),
  "selling_url": z.string().describe("售卖地址").optional(),
  "start_date": z.string().describe("售卖开始时间。格式：yyyy-MM-dd HH:mm:ss").optional()
}