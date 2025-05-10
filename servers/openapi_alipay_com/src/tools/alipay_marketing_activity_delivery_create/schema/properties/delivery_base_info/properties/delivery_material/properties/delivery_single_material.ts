import { z } from "zod"

export const inputParams = {
  "delivery_image": z.string().describe("投放计划图片素材。通过接口<a href =\"https://opendocs.alipay.com/open/049d64?pathHash=a411214d&scene=928cd58dc06f4466b9ad657776327a06\">alipay.marketing.material.image.upload</a>上传图片返回的resource_id。").optional()
}