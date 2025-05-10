import { z } from "zod"

export const inputParams = {
  "next_user_id": z.string().describe("当关注者数量超过10000时使用，本次拉取数据中第一个用户的userId，从上次接口调用返回值中获取。第一次调用置空").optional(),
  "open_id": z.string().describe("支付宝用户的唯一标识").optional()
}