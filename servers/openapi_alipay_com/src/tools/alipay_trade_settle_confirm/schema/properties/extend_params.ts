import { z } from "zod"

export const inputParams = {
  "royalty_freeze": z.string().describe("是否进行资金冻结，用于后续分账，true表示冻结，false或不传表示不冻结").optional()
}