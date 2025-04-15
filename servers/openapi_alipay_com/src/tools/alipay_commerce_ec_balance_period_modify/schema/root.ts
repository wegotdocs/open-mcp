import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("共同账户id - 适用于在企业码小程序创建的共同账户，和agreement_no搭配使用").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "bill_day": z.number().int().describe("月账单账期").optional(),
  "enterprise_id": z.string().describe("企业ID - 适用于在企业码PC端创建的企业账号").optional()
}