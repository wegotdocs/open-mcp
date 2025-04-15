import { z } from "zod"

export const inputParams = {
  "product_code": z.string().describe("因公付产品码").optional(),
  "biz_scene": z.string().describe("业务场景").optional(),
  "account_id": z.string().describe("账户ID").optional(),
  "page_num": z.string().describe("采用分页查询，本参数为空或0默认显示第一页。如果输入的值大于总页数，则支付宝返回最后一页数据").optional(),
  "page_size": z.string().describe("每页大小，不传的情况下默认20条，超过20条默认按20条查询；不足20条则按实际记录数返回").optional(),
  "user_id": z.string().describe("员工ID").optional(),
  "open_id": z.string().describe("员工的openId").optional(),
  "start_date": z.string().describe("起始日期").optional(),
  "end_date": z.string().describe("截止日期").optional(),
  "agreement_no": z.string().describe("授权协议号").optional()
}