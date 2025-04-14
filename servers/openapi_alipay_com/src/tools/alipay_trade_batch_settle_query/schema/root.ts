import { z } from "zod"

export const inputParams = {
  "extend_params": z.string().describe("扩展参数").optional(),
  "out_request_no": z.string().describe("批量结算时传入的外部流水号，与settle_no二者必填其一。 out_request_no和settle_no如果同时存在，优先取settle_no").optional(),
  "settle_no": z.string().describe("结算单据号，与out_request_no二者必填其一").optional()
}