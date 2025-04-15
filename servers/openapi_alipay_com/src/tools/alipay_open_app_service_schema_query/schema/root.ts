import { z } from "zod"

export const inputParams = {
  "category_id": z.string().describe("类目id, 获取请参考<a href=\"https://opendocs.alipay.com/mini/03ci0w?pathHash=ed3c875c\">各个行业场景服务接入资料</a>").optional(),
  "template_type": z.string().describe("服务模版类型，默认值:DEFAULT").optional()
}