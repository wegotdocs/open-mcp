import { z } from "zod"

export const inputParams = {
  "camp_status": z.string().describe("金活动修改后的状态。支持修改为：\t*PAUSE：活动暂停。\t*READY：活动开始。\t*CLOSED：活动结束。").optional(),
  "crowd_no": z.string().describe("现金活动号，通过<a href=\"https://opendocs.alipay.com/apis/api_5/alipay.marketing.campaign.cash.create\">alipay.marketing.campaign.cash.create</a>(创建现金活动)接口创建现金活动获取。").optional()
}