import { z } from "zod"

export const inputParams = {
  "biz_content": z.string().describe("json串，<a href=\"https://doc.open.alipay.com/doc2/detail.htm?spm=a219a.7386797.0.0.1l7WMo&treeId=53&articleId=103481&docType=1\">详情请见</a>").optional()
}