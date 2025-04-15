import { z } from "zod"

export const inputParams = {
  "address": z.string().describe("收货地址").optional(),
  "division_code": z.string().describe("中国标准城市区域码").optional(),
  "mobile": z.string().describe("收货人手机号").optional(),
  "name": z.string().describe("收货人的姓名").optional(),
  "zip": z.string().describe("收货地址邮编").optional()
}