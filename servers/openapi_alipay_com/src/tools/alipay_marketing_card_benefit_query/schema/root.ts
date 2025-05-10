import { z } from "zod"

export const inputParams = {
  "template_id": z.string().describe("会员卡模板ID，通过 <a  href=\"https://opendocs.alipay.com/apis/api_5/alipay.marketing.card.template.create\">alipay.marketing.card.template.create</a>（会员卡模板创建)接口创建会员卡模板获取。").optional(),
  "benefit_id": z.string().describe("权益ID，通过 <a  href=\"https://opendocs.alipay.com/apis/api_5/alipay.marketing.card.benefit.create\">alipay.marketing.card.benefit.create</a>(会员卡模板外部权益创建)接口创建获取。").optional()
}