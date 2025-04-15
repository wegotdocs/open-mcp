import { z } from "zod"

export const inputParams = {
  "invoice_token": z.string().describe("查询请求令牌。通过唤起支付宝钱包后用户进入发票管家选择发票列表后创建，并通过isv接收url回传给isv。详见 <a href=\"https://opendocs.alipay.com/open/01m6z5\">\"选\"模式发票报销</a>。").optional(),
  "scene": z.string().describe("发票要素获取应用场景。固定为 INVOICE_EXPENSE 表示发票报销。").optional()
}