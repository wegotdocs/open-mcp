import { z } from "zod"

export const inputParams = {
  "access_product_code": z.string().describe("接入的产品编号。 枚举如下：\t* OPENAPI_BIND_DEFAULT：操作类型为账号绑定。\t* OPENAPI_AUTH_DEFAULT：操作类型为代运营授权时。").optional(),
  "alipay_account": z.string().describe("支付宝登录账号，通常为手机号或者邮箱。\t间连场景必填。\t直连场景选填，特别注意merchant_no和alipay_account不能同时为空，都有值优先取merchant_no。").optional(),
  "isv_scene_permissions": z.string().describe("场景授权列表结构结构：场景codeA:权限code1,权限code2;场景codeB:权限code1,权限code2;\t说明：\t* 本参数和access_product_code只需要传一个。\t* 场景 + 权限Code含义：\t   SHOP_MANAGE:SHOP_MANAGE_BASE：管理门店信息\t   MINI_APP_OPER:MINI_APP_OPER_BASE：运营支付宝小程序\t   PROMOTION_MANAGE:PROMOTION_MANAGE_BASE：运营营销活动\t   OPERATION_POINTS:OPERATION_POINTS_BASE：管理运营积分\t   INCENTIVE_POINT_MANAGE:INCENTIVE_POINT_MANAGE_BASE：管理激励点数").optional(),
  "merchant_no": z.string().describe("支付宝商户号。\t间连场景，merchant_no必填，传入商户smid，特别注意仅支持2088开头的间连商户。\t直连场景，merchant_no选填，传入商户支付宝pid，特别注意merchant_no和alipay_account不能同时为空，优先取merchant_no。").optional(),
  "operate_type": z.string().describe("代运营操作类型。枚举如下：\t* ACCOUNT_BIND：代表绑定支付宝账号，仅对于间连商户。\t* OPERATION_AUTH：代表代运营授权，支持间连和直连商户，其中间连场景包含绑定支付宝账号。").optional(),
  "out_biz_no": z.string().describe("外部操作流水，ISV自定义。每次操作需要确保唯一。").optional()
}