import { z } from "zod"

export const inputParams = {
  "royalty_finish": z.string().describe("\"冻结分账场景下生效，其他场景传入无效。代表该交易分账是否完结，可选值：true/false，不传默认为false。true：代表分账完结，则本次分账处理完成后会把该笔交易的剩余冻结金额全额解冻。false：代表分账未完结。\"").optional(),
  "royalty_finish_amount": z.string().describe("部分分账完结的金额，单位为元。若该参数不为空，则会按照该参数金额进行部分解冻。注：该参数不为空时，royalty_finish需要传入true").optional()
}