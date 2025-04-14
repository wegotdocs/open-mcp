import { z } from "zod"

export const inputParams = {
  "auth_scope": z.string().describe("用于开放认证授权").optional(),
  "auth_type": z.string().describe("用于指定授权类型，与auth_scope配合使用").optional(),
  "face_reserve_strategy": z.string().describe("不传默认为reserve").optional(),
  "facial_picture_level": z.string().describe("若有特殊人脸等级采集要求，可指定等级").optional(),
  "linked_merchant_app_id": z.string().describe("用于授权二级商户操作").optional(),
  "linked_merchant_logo_url": z.string().describe("用于指定展示的商户logo").optional(),
  "linked_merchant_name": z.string().describe("用于指定展示的商户名称").optional(),
  "out_put_facial_picture": z.boolean().describe("在拥有该权限前提下，用于商户控制是否透出活体人脸").optional(),
  "return_url": z.string().describe("认证成功后需要跳转的地址，一般为商户业务页面；若无跳转地址可填空字符\"\";").optional()
}