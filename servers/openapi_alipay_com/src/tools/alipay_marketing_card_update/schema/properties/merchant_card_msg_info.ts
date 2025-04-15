import { z } from "zod"

export const inputParams = {
  "changed_point": z.string().describe("本次消息通知的变动积分，积分必须为数字型（可为浮点型，带2位小数点），格式非法则不发送消息。例如：\t100，则代表增加100积分。\t-100，则代表减少100积分。").optional()
}