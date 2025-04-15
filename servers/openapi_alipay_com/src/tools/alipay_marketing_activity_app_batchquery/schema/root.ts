import { z } from "zod"

export const inputParams = {
  "activity_id": z.string().describe("活动id"),
  "merchant_id": z.string().describe("商户PID,默认为当前接口调用商户 \t限制: \t接口调用者必须有商户代运营权限。 \t<a href=\"https://opendocs.alipay.com/mini/01hm6i#%E4%BB%A3%E8%BF%90%E8%90%A5%E6%8E%88%E6%9D%83\">代运营授权流程</a>").optional(),
  "page_num": z.number().int().describe("分页查询页码。 \t限制:\t必须为大于0的整数").optional(),
  "page_size": z.string().describe("分页查询单页数据条数。 \t限制: \t1.必须为大于0的整数 \t2.每页最大值为20").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional()
}