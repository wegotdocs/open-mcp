import { z } from "zod"

export const inputParams = {
  "template_id": z.string().describe("会员卡模板id。调用alipay.marketing.card.template.create（会员卡模板创建接口）创建模板后同步返回。").optional()
}