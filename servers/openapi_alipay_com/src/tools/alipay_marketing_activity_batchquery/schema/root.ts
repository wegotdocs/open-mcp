import { z } from "zod"

export const inputParams = {
  "activity_status": z.string().describe("活动状态 。 ACTIVE:活动已激活，表示活动已经生效，等到活动开始(publish_start_time)之后用户就可以参与活动。 PAUSE:活动已暂停，表示商户临时暂停该活动，该状态下用户不能参与活动。").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式。").optional(),
  "merchant_id": z.string().describe("商户PID,默认为当前接口调用商户。").optional(),
  "page_num": z.number().int().describe("分页查询页码。").optional(),
  "page_size": z.number().int().describe("分页查询单页数据条数。").optional()
}