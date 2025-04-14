import { z } from "zod"

export const inputParams = {
  "agreement_no": z.string().describe("协议号").optional(),
  "key": z.string().describe("明细凭证，传入流水号（转账接口查询结果）。汇总凭证，传入起止时间，格式yyyy-MM-dd_yyyy-MM-dd。").optional(),
  "store_no": z.string().describe("子账本号，或者子账本名称。模糊查询").optional(),
  "type": z.string().describe("申请的类型。可传入：FUND_PLATFORM_DETAIL - 资金明细证明，FUND_PLATFORM_SUM - 资金汇总证明").optional()
}