import { z } from "zod"

export const inputParams = {
  "biz_scene": z.string().describe("用于区分资金因公付协议、以及收银台文案等差异；").optional(),
  "create_fund_account": z.boolean().describe("是否设置管理员支付宝为企业出资账户").optional(),
  "create_iot_group": z.boolean().describe("是否创建企业人脸库，适用于对接团餐刷脸付、门禁刷脸通行等场景").optional(),
  "enterprise_alias": z.string().describe("企业简称").optional(),
  "enterprise_name": z.string().describe("企业名称").optional(),
  "group_app_id": z.string().describe("订购【一脸通行开通插件】的小程序appId").optional(),
  "identity": z.string().describe("管理员身份标识").optional(),
  "identity_name": z.string().describe("管理员姓名").optional(),
  "identity_open_id": z.string().describe("管理员身份openId").optional(),
  "identity_type": z.string().describe("管理员身份类型").optional(),
  "out_biz_no": z.string().describe("外部业务号").optional(),
  "sign_return_url": z.string().describe("企业码签约后回跳地址。不传默认为空，签约后停留在当前页。").optional()
}