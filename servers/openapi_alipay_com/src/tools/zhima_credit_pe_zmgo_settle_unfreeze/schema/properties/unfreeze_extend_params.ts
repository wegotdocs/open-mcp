import { z } from "zod"

export const inputParams = {
  "quit_type": z.string().describe("退出类型").optional(),
  "total_discount_amount": z.string().describe("芝麻Go开始到到期过程中享受的优惠总金额").optional(),
  "total_real_pay_amount": z.string().describe("芝麻Go开始到到期过程中任务相关支付的总金额。").optional(),
  "total_task_count": z.string().describe("芝麻Go开始到到期过程中和任务相关的完成次数").optional()
}