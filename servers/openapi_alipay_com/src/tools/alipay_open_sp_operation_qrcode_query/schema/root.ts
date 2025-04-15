import { z } from "zod"

export const inputParams = {
  "out_biz_no": z.string().describe("外部操作流水，由服务商自定义，需确保每次操作唯一。仅支持数字、字母、下划线组合。").optional(),
  "operate_type": z.string().describe("代运营操作类型。取值如下：\t* ACCOUNT_BIND：账号绑定，仅支持间连商户。\t* OPERATION_AUTH：代运营授权，支持间连、直连商户。").optional(),
  "merchant_no": z.string().describe("支付宝商户号。注意仅支持 2088 开头的间连商户。\t若被代运营者是间连商户，则 merchant_no 必填；\t若为直连商户，则 merchant_no 和 alipay_account 不能同时为空，都有值优先取 merchant_no。").optional(),
  "alipay_account": z.string().describe("支付宝登录账号。通常为手机号或者邮箱。\t若被代运营者是间连商户，该字段无需填写。\t若为直连商户，则 merchant_no 和 alipay_account 不能同时为空，都有值优先取 merchant_no。").optional(),
  "access_product_code": z.string().describe("接入的产品编号。\t操作类型为绑定的，填OPENAPI_BIND_DEFAULT;\t操作类型为授权的，填OPENAPI_AUTH_DEFAULT").optional(),
  "isv_scene_permissions": z.string().describe("场景授权列表结构结构：场景codeA:权限code1,权限code2;场景codeB:权限code1,权限code2;").optional()
}