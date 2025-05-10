import { z } from "zod"

export const inputParams = {
  "agreement_no": z.string().describe("ISV与商户签约授权协议号").optional(),
  "agreement_type": z.string().describe("根据不同业务协议类型，传入不同参数。传入协议产品码（personal_product_code，通过协议查询接口、协议签约通知响应参数获取），不填的话默认按照示例值传入。 安全发协议：FUND_SAFT_SIGN_WITHHOLDING_P 专用金协议：FLEXIBLE_EMPLOYMENT_SERVICE_P 批量有密：FUND_AUTHORIZE_FLOW").optional(),
  "end_time": z.string().describe("查询时间区间的结束时间，属于闭区间。\t[start_time,end_time]").optional(),
  "key": z.string().describe("根据不同业务类型，传入不同参数。格式如下： * FUND_DETAIL - 资金业务回单。传入资金单号(fundOrderId，可通过充值、转账、提现接口获取)").optional(),
  "start_time": z.string().describe("搜索范围的起始时间").optional(),
  "type": z.string().describe("申请的类型（目前仅支持资金业务回单）。可传入： * FUND_DETAIL - 资金业务回单。").optional()
}