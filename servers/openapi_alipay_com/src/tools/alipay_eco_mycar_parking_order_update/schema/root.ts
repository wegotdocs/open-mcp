import { z } from "zod"

export const inputParams = {
  "open_id": z.string().describe("应用用户ID，唯一标识").optional(),
  "order_no": z.string().describe("支付宝支付流水号，系统唯一").optional(),
  "order_status": z.string().describe("用户停车订单状态，枚举支持：\t*0：成功。\t*1：失败。").optional(),
  "user_id": z.string().describe("停车缴费用户 id，用户在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。\t注意：ISV需保证用户 id 的正确性，以免导致用户在停车平台查询不到相关的订单信息。").optional()
}