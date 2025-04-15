import { z } from "zod"

export const inputParams = {
  "certify_id": z.string().describe("传入初始化接口datadigital.fincloud.generalsaas.face.check.initialize 得到的certify_id").optional(),
  "need_alive_photo": z.string().describe("是否需要返回活体结果图片，needAlivePhoto：Y_O （原始图片）、Y_M（虚化，背景马赛克）、N（不返图）。非必填，默认为N").optional(),
  "need_score": z.string().describe("该入参已经废弃。").optional(),
  "need_quality_score": z.string().describe("是否需要返回图片质量分，非必填，默认值为N。 N表示不需要，Y表示需要").optional(),
  "need_attack_result": z.string().describe("该参数已废弃").optional()
}