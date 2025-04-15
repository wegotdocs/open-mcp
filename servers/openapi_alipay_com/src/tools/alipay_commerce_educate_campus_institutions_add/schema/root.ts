import { z } from "zod"

export const inputParams = {
  "card_pict_url": z.string().describe("事业单位法人证书或办学许可证的图片。入驻学校时，如果流入人工审核，会根据此图片进行辅助验证。").optional(),
  "city_code": z.string().describe("市").optional(),
  "inst_name": z.string().describe("入驻的学校名称，必须是完整的学校全称").optional(),
  "inst_std_code": z.string().describe("学校外标，使用统一社会信用编码").optional(),
  "learning_stage": z.string().describe("办学阶段。\t枚举值如下：\tKINDERGARTEN（幼儿园）\tPRIMARY_SCHOOL（小学） \tMIDDLE_SCHOOL（初中） \tHIGH_SCHOOL（高中）\tSECONDARY_VOCATIONAL_SCHOOL（中职中专） \t注意：如果学校兼有多种属性，可以连写用英文逗号拆分，如：MIDDLE_SCHOOL,HIGH_SCHOOL 代表兼有初中部和高中部；").optional(),
  "province_code": z.string().describe("省份").optional(),
  "school_property": z.string().describe("学校性质.枚举值如下：\t 1：公立 \t2：民办").optional()
}