import { z } from "zod"

export const inputParams = {
  "start_time": z.string().describe("账单查询时间范围 -- 起始时间").optional(),
  "end_time": z.string().describe("账单查询时间范围 -- 结束范围。时间范围最大不超过31天。").optional(),
  "page_no": z.string().describe("页码，从1开始").optional(),
  "page_size": z.string().describe("分页大小1000-2000，默认2000").optional(),
  "agreement_type": z.string().describe("根据不同业务协议类型，传入不同参数。传入协议产品码（personal_product_code，通过协议查询接口、协议签约通知响应参数获取），不填的话默认按照示例值传入。 安全发协议：FUND_SAFT_SIGN_WITHHOLDING_P 专用金协议：FLEXIBLE_EMPLOYMENT_SERVICE_P").optional(),
  "agreement_no": z.string().describe("ISV与商户授权协议号").optional(),
  "account_book_id": z.string().describe("记账本id，服务商在帮助商户开通时候获取的唯一身份号").optional()
}