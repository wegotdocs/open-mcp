import { z } from "zod"

export const inputParams = {
  "page_num": z.number().int().describe("分页参数，需要查询的页码，起始页是1").optional(),
  "page_size": z.number().int().describe("分页参数，每页记录数，最大不可超过30").optional(),
  "voucher_package_purchase_start_time": z.string().describe("券包购买开始时间。 格式为：yyyy-MM-dd HH:mm:ss").optional(),
  "voucher_package_status": z.string().describe("券包状态").optional()
}