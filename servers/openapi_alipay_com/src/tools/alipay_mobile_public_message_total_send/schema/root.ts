import { z } from "zod"

export const inputParams = {
  "biz_content": z.string().describe("业务内容，其中包括消息类型msgType和消息体两部分，具体参见“表1-2 服务窗群发消息的biz_content参数说明”。").optional()
}