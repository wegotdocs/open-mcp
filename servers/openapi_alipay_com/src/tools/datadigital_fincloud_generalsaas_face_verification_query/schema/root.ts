import { z } from "zod"

export const inputParams = {
  "certify_id": z.string().describe("填入人脸核身初始化阶段获取到的certify_id").optional(),
  "need_alive_photo": z.string().describe("是否需要返回活体结果图片，默认为N（不返图）").optional()
}