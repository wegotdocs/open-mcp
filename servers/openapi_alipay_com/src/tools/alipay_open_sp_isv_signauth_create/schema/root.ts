import { z } from "zod"

export const inputParams = {
  "isv_auth_scene_infos": z.array(z.object({ "scene_code": z.string().describe("运营场景编码\tOPERATION_POINTS：管理运营积分\tSHOP_MANAGE：管理门店信息\tMINI_APP_OPER：运营支付宝小程序\tPROMOTION_MANAGE：运营营销活动").optional(), "scene_permissions": z.string().describe("运营场景下的权限编码，多个权限编码以,隔开\t1、管理门店信息：SHOP_MANAGE；基础权限（升级）：SHOP_MANAGE_BASE\t2、运营营销活动：PROMOTION_MANAGE ；基础权限（升级）：PROMOTION_MANAGE_BASE\t3、运营支付宝小程序：MINI_APP_OPER；基础权限（升级）：MINI_APP_OPER_BASE\t4、管理运营积分：OPERATION_POINTS；基础权限（升级）：OPERATION_POINTS_BASE").optional() })).describe("代运营授权场景信息").optional(),
  "merchant_logon_id": z.string().describe("商户登录账号\t支持手机号和邮箱账号；不支持pid").optional(),
  "need_app_auth": z.string().describe("1表示需要，0表示不需要\t不传参数默认是需要（1）\t是否创建三方应用授权子任务，也就是是否需要给三方应用授权").optional(),
  "sign_order_no": z.string().describe("签约单号\t可通过alipay.open.agent.confirm接口获取签约单号").optional()
}