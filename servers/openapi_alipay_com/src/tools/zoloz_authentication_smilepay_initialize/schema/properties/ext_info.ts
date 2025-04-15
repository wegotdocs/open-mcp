import { z } from "zod"

export const inputParams = {
  "biz_type": z.string().describe("业务类型：7，基于1:N人脸搜索的刷脸支付场景；8，基于姓名和身份证号的刷脸支付场景。").optional()
}