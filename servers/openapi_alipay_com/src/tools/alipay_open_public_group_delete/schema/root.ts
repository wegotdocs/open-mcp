import { z } from "zod"

export const inputParams = {
  "group_id": z.string().describe("分组ID，通过<a href=\"https://opendocs.alipay.com/apis/api_6/alipay.open.public.group.create\">alipay.open.public.group.create</a>（用户分组创建接口)\t创建用户分组获取。").optional()
}