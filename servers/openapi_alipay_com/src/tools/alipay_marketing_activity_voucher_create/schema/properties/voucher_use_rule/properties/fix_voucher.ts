import { z } from "zod"

export const inputParams = {
  "amount": z.string().describe("面额，每张优惠券可以抵扣的金额。\t\t限制：\t1、币种为人民币，单位为元。小数点以后最多保留两位。\t2、取值范围:0.1<=x<=3000").optional(),
  "floor_amount": z.string().describe("门槛金额。该字段不填写，认为无门槛。").optional()
}