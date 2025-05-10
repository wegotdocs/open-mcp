import { z } from "zod"

export const inputParams = {
  "address": z.string().describe("店铺地址").optional(),
  "alipay_shop_id": z.string().describe("蚂蚁门店shop_id").optional(),
  "ext_info": z.array(z.object({ "ext_key": z.string().describe("键值").optional(), "ext_value": z.string().describe("值").optional() })).describe("门店其他业务属性，不同业务场景KEY枚举值不同，使用前请参考产品文档").optional(),
  "merchant_shop_id": z.string().describe("商户门店id\t支持英文、数字的组合").optional(),
  "merchant_shop_link_page": z.string().describe("店铺详情链接地址").optional(),
  "name": z.string().describe("店铺名称").optional(),
  "phone_num": z.string().describe("联系电话-支持固话或手机号 仅支持数字、+、- 。例如 手机：1380***1111、固话：021-888**888").optional(),
  "type": z.string().describe("仅当alipay_shop_id字段值为非标准蚂蚁门店时使用，其他场景无需传入").optional()
}