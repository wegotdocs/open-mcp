import { z } from "zod"

export const inputParams = {
  "isv_pid": z.string().describe("Isv pid").optional(),
  "school_pid": z.string().describe("学校支付宝pid，直付通填写smid").optional(),
  "out_trade_no": z.string().describe("ISV调用发送账单接口，返回给商户的order_no").optional()
}