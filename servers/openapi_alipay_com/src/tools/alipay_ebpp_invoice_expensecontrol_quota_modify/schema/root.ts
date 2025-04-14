import { z } from "zod"

export const inputParams = {
  "action": z.string().describe("变更模式").optional(),
  "amount": z.string().describe("变更的金额/余额，日元或者韩元以（元）为单位，其他币种以（分）为单位，当变更的资产类型为次卡时，单位为次").optional(),
  "enterprise_id": z.string().describe("企业ID").optional(),
  "outer_source_id": z.string().describe("外部操作幂等ID（接入方接口调用幂等控制ID）").optional(),
  "quota_id": z.string().describe("额度ID").optional(),
  "share_mode": z.string().describe("是否可转赠，1表示可转赠，0表示不可转赠").optional()
}