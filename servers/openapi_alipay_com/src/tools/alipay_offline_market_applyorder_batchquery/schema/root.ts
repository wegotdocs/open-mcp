import { z } from "zod"

export const inputParams = {
  "action": z.string().describe("操作动作").optional(),
  "apply_ids": z.array(z.string()).describe("支付宝流水ID列表，最大不超过100个").optional(),
  "biz_id": z.string().describe("业务主体ID。根据biz_type不同可能对应shop_id或item_id。").optional(),
  "biz_type": z.string().describe("业务类型：SHOP-店铺，ITEM-商品。").optional(),
  "end_time": z.string().describe("查询的流水创建时间最后值。格式：yyyy-MM-dd HH:mm:ss").optional(),
  "op_id": z.string().describe("操作用户的支付账号id").optional(),
  "op_role": z.string().describe("系统集成商统一传入ISV").optional(),
  "page_no": z.number().int().describe("页码，留空标示第一页，默认20个结果为一页").optional(),
  "page_size": z.number().int().describe("每页记录数。默认20，最大100。").optional(),
  "request_ids": z.array(z.string()).describe("请求ID列表，最大不超过100个。\r\t注意：暂时不支持此字段查询。").optional(),
  "start_time": z.string().describe("查询的流水创建时间起始值，只能查询近3个月数据。格式：yyyy-MM-dd HH:mm:ss").optional(),
  "status": z.string().describe("流水状态：INIT-初始，PROCESS-处理中，SUCCESS-成功，FAIL-失败。").optional()
}