import { z } from "zod"

export const inputParams = {
  "enterprise_id": z.string().describe("企业id；enterprise_id与account_id至少传一个，如果都传了优先使用enterprise_id").optional(),
  "account_id": z.string().describe("资金共同账号id；enterprise_id与account_id至少传一个，如果都传了优先使用enterprise_id(为兼容企业码1.0老接口保留的字段，已过时，新接客户请使用enterprise_id)").optional()
}