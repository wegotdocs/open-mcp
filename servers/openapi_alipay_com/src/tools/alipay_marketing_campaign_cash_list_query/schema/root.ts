import { z } from "zod"

export const inputParams = {
  "camp_status": z.string().describe("要查询的活动状态,不填默认为 ALL 返回所有类型。枚举支持:\t*ALL：所有类型的活动。\t*CREATED：已创建未打款。\t*PAID：已打款。\t*READY：活动已开始。\t*PAUSE：活动已暂停。\t*CLOSED：活动已结束。\t*SETTLE：活动已清算。").optional(),
  "page_size": z.string().describe("分页查询时每页返回的列表大小，每页数据最大为 50。").optional(),
  "page_index": z.string().describe("分页查询时的页码，从1开始").optional()
}