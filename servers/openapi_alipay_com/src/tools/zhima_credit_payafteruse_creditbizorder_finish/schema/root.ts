import { z } from "zod"

export const inputParams = {
  "credit_biz_order_id": z.string().describe("信用服务订单号").optional(),
  "is_fulfilled": z.string().describe("字符串类型，用户此订单是否守约。\t传\"true\"时，用户在芝麻信用-守约记录中，该笔订单是已守约状态；\t传\"false\"时，用户在芝麻信用-守约记录中，该笔订单是已取消状态。").optional(),
  "out_request_no": z.string().describe("商户外部请求号").optional(),
  "remark": z.string().describe("商户对本次操作的附言描述").optional()
}