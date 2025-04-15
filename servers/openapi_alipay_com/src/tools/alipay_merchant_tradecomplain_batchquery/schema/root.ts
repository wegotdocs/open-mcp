import { z } from "zod"

export const inputParams = {
  "begin_time": z.string().describe("查询开始时间\t时间格式：yyyy-MM-dd HH:mm:ss\t若不填写，则默认当前时间30天前。\t注意：begin_time和end_time时间跨度最大一年").optional(),
  "end_time": z.string().describe("查询结束时间\t时间格式：yyyy-MM-dd HH:mm:ss\t若不填写，则默认当前时间。\t注意：begin_time和end_time时间跨度最大一年").optional(),
  "page_num": z.number().int().describe("当前页，从1开始").optional(),
  "page_size": z.number().int().describe("每页条数，默认10条，最多支持20条").optional(),
  "status": z.string().describe("状态如下\t待处理：MERCHANT_PROCESSING \t已处理：MERCHANT_FEEDBACKED \t投诉完结：FINISHED \t投诉关闭：CANCELLED \t客服处理中：PLATFORM_PROCESSING \t客服处理完结：PLATFORM_FINISH \t投诉关闭：CLOSED").optional(),
  "target_infos": z.array(z.object({ "target_id": z.string().describe("应用id，例如小程序id").optional(), "target_type": z.string().describe("应用类型\t小程序传入：APPID\t生活号传入：PUBLICID").optional() })).describe("应用信息").optional()
}