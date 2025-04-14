import { z } from "zod"

export const inputParams = {
  "shop_id": z.string().describe("支付宝门店ID").optional(),
  "op_role": z.string().describe("服务商及商户调用情况下务必传递。操作人角色，默认商户操作:MERCHANT；服务商操作：PROVIDER；ISV: 不需要填写").optional()
}