import { z } from "zod"

export const inputParams = {
  "label_id": z.string().describe("标签 id，只支持生活号自定义标签。通过 <a href=\"https://opendocs.alipay.com/apis/api_6/alipay.open.public.life.label.create\">alipay.open.public.life.label.create</a>(创建标签接口)创建自定义标签后获取。").optional()
}