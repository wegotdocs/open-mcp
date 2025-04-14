import { z } from "zod"

export const inputParams = {
  "cycle_manage_url": z.string().describe("连续购买管理地址。包括查看当前用户连续购买详情，关闭连续购买等功能").optional(),
  "downgrade_url": z.string().describe("付费外卡降级地址").optional(),
  "refund_url": z.string().describe("续费外卡退款地址").optional(),
  "renew_url": z.string().describe("付费外卡续费地址").optional(),
  "upgrade_url": z.string().describe("付费外卡升级地址").optional()
}