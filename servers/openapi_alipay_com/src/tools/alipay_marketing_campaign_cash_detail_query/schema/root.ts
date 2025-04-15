import { z } from "zod"

export const inputParams = {
  "crowd_no": z.string().describe("现金活动号，通过<a href=\"https://opendocs.alipay.com/apis/api_5/alipay.marketing.campaign.cash.create\">alipay.marketing.campaign.cash.create</a>(创建现金活动)接口创建现金活动获取。").optional()
}