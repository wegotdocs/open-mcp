import { z } from "zod"

export const inputParams = {
  "account_book_id": z.string().describe("记账本ID").optional(),
  "agreement_no": z.string().describe("协议号。 若是基于协议的记账本，则agreement_no必传； 若是自创建的记账本，则agreement_no不传；").optional(),
  "biz_scene": z.string().describe("场景码。固定为DEFAULT").optional(),
  "product_code": z.string().describe("产品码。固定为SATF_FUND_BOOK").optional()
}