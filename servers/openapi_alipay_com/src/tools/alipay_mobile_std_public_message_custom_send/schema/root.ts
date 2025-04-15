import { z } from "zod"

export const inputParams = {
  "biz_content": z.string().describe("业务内容，其中包括消息类型msgType、消息体和消息接受人toUserId三大块，具体参见“表1-2 服务窗单发客服消息的biz_content参数说明”。").optional()
}