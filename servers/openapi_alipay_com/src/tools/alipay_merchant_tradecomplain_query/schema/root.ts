import { z } from "zod"

export const inputParams = {
  "complain_event_id": z.string().describe("支付宝侧投诉单号")
}