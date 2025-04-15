import { z } from "zod"

export const inputParams = {
  "category_id": z.string().describe("芝麻外部类目").optional(),
  "credit_agreement_id": z.string().describe("芝麻开通/授权协议号，在用户开通芝麻先享服务后，由芝麻生成并返回给商户；只有当opertaion_type传入AGREEMENT_TRANSFER值是，该字段必传；其他场景不需要传入").optional(),
  "deduct_agreement_no": z.string().describe("用户的代扣协议号").optional(),
  "extend_params": z.string().describe("业务扩展参数，Json格式").optional(),
  "operation_type": z.string().describe("AGREEMENT_TRANSFER代表是存量先享协议的主体切换功能；其他场景不需要传入；默认为空；").optional(),
  "out_agreement_no": z.string().describe("商户外部协议号，不同的支付宝用户需要传递不同的外部单号").optional(),
  "product_code": z.string().describe("商户签约的芝麻产品的产品码").optional(),
  "zm_service_id": z.string().describe("芝麻信用服务ID").optional()
}