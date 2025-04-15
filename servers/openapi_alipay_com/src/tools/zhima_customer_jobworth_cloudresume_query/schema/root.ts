import { z } from "zod"

export const inputParams = {
  "conn_key": z.string().describe("长效的认证令牌：zhima.credit.payafteruse.creditagreement.sign 的out_agreement_no").optional(),
  "once_token": z.string().describe("交换云简历的单次token：zhima.credit.payafteruse.creditagreement.sign 的\t\textra_param入参onceToken（授权后5分钟内，单次有效").optional()
}