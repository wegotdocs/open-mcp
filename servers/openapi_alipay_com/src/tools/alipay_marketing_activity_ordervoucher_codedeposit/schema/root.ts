import { z } from "zod"

export const inputParams = {
  "activity_id": z.string().describe("活动id"),
  "merchant_access_mode": z.string().describe("商户接入模式").optional(),
  "out_biz_no": z.string().describe("外部业务单号，用作幂等控制。\t\t幂等作用：\t参数不变的情况下，再次请求返回与上一次相同的结果。\t\t外部接入方需保证业务单号唯一。").optional(),
  "voucher_codes": z.array(z.string()).describe("券码的数量列表。接口参数为列表类型。\t\t限制：\t目前最大上传 1000 个。\t\t单个code最长64位。\t\t商户上传的券code列表，code允许包含的字符有0-9、a-z、A-Z、-、_、+、=、|。").optional()
}