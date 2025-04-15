import { z } from "zod"

export const inputParams = {
  "floor_amount": z.string().describe("门槛金额。说明：该字段可不填，认为无门槛;").optional(),
  "goods_name": z.string().describe("商品名称。").optional(),
  "origin_amount": z.string().describe("原价。\t限制：\t币种为人民币，单位为元。小数点以后最多保留两位;\t取值范围:0.1<=x<=9999。").optional(),
  "special_amount": z.string().describe("特价，即：原价-特价=优惠金额。").optional()
}