import { z } from "zod"

export const inputParams = {
  "customer_type": z.string().describe("客户类型，PERSONAL表示个人，ALIPAY_RECOMMEND表示支付宝推荐").optional(),
  "ext_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `ext_info` to the tool, first call the tool `expandSchema` with \"/properties/ext_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "implement_end_time": z.string().describe("实施结束时间").optional(),
  "implement_object_name": z.string().describe("实施对象名称").optional(),
  "implement_place": z.string().describe("实施地点").optional(),
  "implement_result": z.string().describe("实施结果，SUCCESS表示实施成功，FAIL表示实施失败").optional(),
  "implement_result_image": z.string().describe("实施结果的照片").optional(),
  "implement_result_remark": z.string().describe("实施结果的备注").optional(),
  "implement_start_time": z.string().describe("实施开始时间").optional(),
  "item_code": z.string().describe("服务优选商品编码").optional(),
  "item_price": z.string().describe("商品价格，这里填写的是整数，单位为分，比如1元，那么输入100").optional(),
  "merchant_pid": z.string().describe("商户pid").optional(),
  "mini_appid": z.string().describe("商品小程序appid，若推广的商品不为小程序，则不传此参数").optional(),
  "oppor_id": z.string().describe("拓展助手中的商机id").optional(),
  "order_id": z.string().describe("下单订单号").optional(),
  "out_biz_no": z.string().describe("外部业务号，传isv系统生成的账单号，需要保证唯一").optional(),
  "promotor_pid": z.string().describe("推广服务商(S2)pid").optional(),
  "shop_id": z.string().describe("店铺id").optional(),
  "sub_promotor_pid": z.string().describe("推广服务商(S2)子账号pid").optional()
}