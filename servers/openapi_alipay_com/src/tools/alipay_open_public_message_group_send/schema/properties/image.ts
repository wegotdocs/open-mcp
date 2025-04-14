import { z } from "zod"

export const inputParams = {
  "url": z.string().describe("图片url，请先调用alipay.offline.material.image.upload 图片上传接口获得图片url").optional()
}