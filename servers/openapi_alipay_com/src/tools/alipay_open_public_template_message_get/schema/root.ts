import { z } from "zod"

export const inputParams = {
  "template_id": z.string().describe("消息母板id，登陆生活号后台(fuwu.alipay.com)，点击菜单“模板消息”，点击“模板库”，即可看到相应模板的消息母板id").optional()
}