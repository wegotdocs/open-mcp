import { z } from "zod"

export const inputParams = {
  "biz_type": z.string().describe("1、1：1人脸验证能力\r\t2、1：n人脸搜索能力（支付宝uid入库）\r\t3、1：n人脸搜索能力（支付宝手机号入库）\r\t4、手机号和人脸识别综合能力").optional(),
  "ext_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `ext_info` to the tool, first call the tool `expandSchema` with \"/properties/ext_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "ftoken": z.string().describe("人脸token").optional(),
  "zim_id": z.string().describe("刷脸初始化流程中产生的zimId值").optional()
}