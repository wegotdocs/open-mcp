import { z } from "zod"

export const inputParams = {
  "biz_code": z.string().describe("DATA_DIGITAL_BIZ_CODE_FACE_CHECK_LIVE，代表活体检测。").optional(),
  "outer_order_no": z.string().describe("客户业务单据号。").optional()
}