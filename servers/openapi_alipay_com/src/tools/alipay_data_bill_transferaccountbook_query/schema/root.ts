import { z } from "zod"

export const inputParams = {
  "start_time": z.string().describe("充值、转账、提现流水业务时间的起始范围").optional(),
  "end_time": z.string().describe("充值、转账、提现流水业务时间的结束范围。与起始时间间隔不超过31天。查询结果为起始时间至结束时间的左闭右开区间").optional(),
  "type": z.string().describe("转账类型：充值-DEPOSIT，提现-WITHDRAW，转账-TRANSFER。").optional(),
  "agreement_no": z.string().describe("协议号").optional(),
  "store_no": z.string().describe("子账本号，或者子账本名称。模糊查询").optional(),
  "page_no": z.string().describe("分页号，从1开始").optional(),
  "page_size": z.string().describe("分页大小1000-2000，默认2000").optional()
}