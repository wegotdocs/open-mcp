import { z } from "zod"

export const inputParams = {
  "order_id": z.string().describe("申请单 id。通过 <a href=\"https://opendocs.alipay.com/apis/01ebig\">alipay.open.sp.blueseaactivity.create</a>接口获取").optional()
}