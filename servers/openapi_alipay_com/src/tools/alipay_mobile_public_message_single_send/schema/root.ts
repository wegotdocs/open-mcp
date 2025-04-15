import { z } from "zod"

export const inputParams = {
  "biz_content": z.string().describe("业务内容，其中包括模板template和消息接收人toUserId两大块，具体参见“表1-2 服务窗单发模板消息的biz_content参数说明”。\r\t<a href=\"https://doc.open.alipay.com/doc2/detail.htm?spm=a219a.7386797.0.0.eZqycg&treeId=53&articleId=103463&docType=1\">详情请见</a>").optional()
}