import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("共同账户ID").optional(),
  "agreement_no": z.string().describe("三方授权协议号").optional(),
  "biz_scene": z.string().describe("业务场景").optional(),
  "identity": z.string().describe("企业账号：identity_type是ALIPAY_USER_ID填支付宝会员ID（2088开头）；\t是ALIPAY_LOGON_ID 填支付宝登录号").optional(),
  "identity_type": z.string().describe("账号类型，目前支持如下类型： 1、ALIPAY_USER_ID 支付宝的会员ID 2、ALIPAY_LOGON_ID：支付宝登录号，支持邮箱和手机号格式").optional(),
  "last_open_id": z.string().describe("按游标查询，传入上次查询最后一个用户的openId").optional(),
  "last_user_id": z.string().describe("按游标查询，传入上次查询最后一个用户ID，适用于逐页查询。优先级大于page_num").optional(),
  "page_num": z.string().describe("采用分页查询，本参数为空或0默认显示第一页。如果输入的值大于总页数，则支付宝返回最后一页数据。").optional(),
  "page_size": z.string().describe("每页大小，不传的情况下默认20条，上限100；不足20条则按实际记录数返回").optional(),
  "product_code": z.string().describe("销售产品码").optional()
}