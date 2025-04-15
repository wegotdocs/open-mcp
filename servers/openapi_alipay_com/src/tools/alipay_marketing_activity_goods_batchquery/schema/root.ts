import { z } from "zod"

export const inputParams = {
  "activity_id": z.string().describe("活动id"),
  "merchant_id": z.string().describe("商户PID,默认为当前接口调用商户。").optional(),
  "goods_use_type": z.string().describe("活动单品类型。").optional(),
  "page_num": z.number().int().describe("分页查询页码。\t限制:\t必须为大于0的整数").optional(),
  "page_size": z.number().int().describe("分页查询单页数据条数。\t限制:\t1.必须为大于0的整数\t2.每页最大值为20").optional(),
  "product_version": z.string().describe("版本号\t\t枚举值:\t2.0.0").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional()
}