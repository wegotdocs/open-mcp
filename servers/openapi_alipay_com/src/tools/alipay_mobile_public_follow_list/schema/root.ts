import { z } from "zod"

export const inputParams = {
  "biz_content": z.string().describe("当nextUserId为空时,代表查询第一组,如果有值时以当前值为准查询下一组\r\t<a href=\"https://doc.open.alipay.com/doc2/detail.htm?spm=a219a.7386797.0.0.eZqycg&treeId=53&articleId=103525&docType=1\">详情请见</a>").optional()
}