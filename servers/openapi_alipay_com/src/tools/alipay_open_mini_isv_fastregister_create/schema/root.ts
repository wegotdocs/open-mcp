import { z } from "zod"

export const inputParams = {
  "app_name": z.string().describe("小程序名称，昵称半自动设定，强制后缀“的试用小程序”。且该参数会进行关键字检查，如果命中品牌关键字则会报错。\t如遇到品牌大客户要用试用小程序，建议用户先换个名字，认证后再修改成品牌名。").optional(),
  "auth_notify_url": z.string().describe("授权确认成功后回调h5链接或小程序页面").optional(),
  "out_order_no": z.string().describe("开发者外部订单号，通过开发者账号+外部订单号做业务幂等").optional(),
  "uid": z.string().describe("商户uid").optional()
}