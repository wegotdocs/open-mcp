import { z } from "zod"

export const inputParams = {
  "product_code": z.string().describe("销售产品码").optional(),
  "biz_scene": z.string().describe("业务场景码").optional(),
  "account_id": z.string().describe("合花群ID（查询方式二：通过传入account_id+agreement_no查询）<br>\t补充说明：<br>\t-该字段可在签约接口alipay.fund.jointaccount.sign调用后，由账户变更结果通知接口alipay.fund.jointaccount.account.completed中返回。<br>\t-该字段可在签约接口调用后，由查询账户详情接口alipay.fund.jointaccount.detail.query中返回。").optional(),
  "agreement_no": z.string().describe("授权协议号（查询方式二：通过传入account_id+agreement_no查询）<br>\t补充说明：<br>\t-该字段可在签约接口alipay.fund.jointaccount.sign调用后，由账户变更结果通知接口alipay.fund.jointaccount.account.completed中返回。<br>\t-该字段可在签约接口调用后，由查询账户详情接口alipay.fund.jointaccount.detail.query中返回。").optional(),
  "out_biz_no": z.string().describe("商户侧单号（查询方式一：通过传入\tout_biz_no查询）<br>\t补充说明：<br>\t-该字段与签约接口alipay.fund.jointaccount.sign请求参数中传入值保持一致").optional(),
  "channel": z.string().describe("业务渠道</br>\t补充说明：</br>\t需要商户侧必传，支付宝侧不做强校验").optional()
}