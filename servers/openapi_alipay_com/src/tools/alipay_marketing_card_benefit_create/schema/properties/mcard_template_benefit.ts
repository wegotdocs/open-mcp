import { z } from "zod"

export const inputParams = {
  "benefit_desc": z.array(z.string()).describe("权益描述信息").optional(),
  "end_date": z.string().describe("权益结束时间。\t\t注：在权益开始时间和结束时间范围内的权益才会认为是有效权益进行展示。").optional(),
  "ext_info": z.string().describe("会员卡模板权益扩展信息：JSON格式; openUrl 说明：跳转到商户的优惠活动页面").optional(),
  "start_date": z.string().describe("权益开始时间").optional(),
  "template_id": z.string().describe("会员卡模板ID").optional(),
  "title": z.string().describe("权益标题").optional()
}