import { z } from "zod"

export const inputParams = {
  "operate_type": z.string().describe("代运营操作类型。取值如下 ACCOUNT_BIND：账号绑定； OPERATION_AUTH：代运营授权。").optional(),
  "batch_no": z.string().describe("支付宝操作批次号。\tbatch_no提供基于操作批次的精确查询，只查询本操作批次的代运营操作结果，不反映最终代运营操作结果。\t注意：\t1.access_product_code、merchant_no、alipay_account三个参数组合与传入 batch_no 为两种查询方式，不可同时为空且以 batch_no 优先。\t2.access_product_code、merchant_no、alipay_account三个参数组合可以查询最终代运营操作结果。").optional(),
  "access_product_code": z.string().describe("接入的产品编号。未传batch_no时必填，枚举如下：\tOPENAPI_BIND_DEFAULT：操作类型为账号绑定；\tOPENAPI_AUTH_DEFAULT：操作类型为代运营授权。").optional(),
  "merchant_no": z.string().describe("支付宝商户号。支持间连、直连商户，值为2088开头。\t未传batch_no时需注意：\t若查询间连商户则 merchant_no 必填； \t若查询直连商户，则merchant_no和alipay_account不能同时为空，都有值优先取merchant_no。").optional(),
  "alipay_account": z.string().describe("支付宝登录账号，通常为手机号或者邮箱。未传batch_no时需注意：\t1.当查询merchant_no为间连商户时：\t  * 若 operate_type=ACCOUNT_BIND，则alipay_account必填。\t  * 若 operate_type=OPERATION_AUTH，则alipay_account无需传入。\t2.当查询merchant_no为直连商户时：\t  * merchant_no和alipay_account不能同时为空，都有值优先取merchant_no。").optional(),
  "isv_scene_permissions": z.string().describe("场景授权列表结构结构：场景codeA:权限code1,权限code2;场景codeB:权限code1,权限code2;").optional()
}