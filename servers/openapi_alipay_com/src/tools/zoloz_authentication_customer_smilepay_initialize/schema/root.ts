import { z } from "zod"

export const inputParams = {
  "service_id": z.string().describe("刷脸服务Id").optional(),
  "service_params": z.string().describe("商户可传入刷脸服务所需的扩展参数，json格式").optional(),
  "zimmetainfo": z.string().describe("{ \"apdidToken\": \"设备指纹\", \"appName\": \"应用名称\", \"appVersion\": \"应用版本\", \"bioMetaInfo\": \"生物信息如2.3.0:3,-4\" }").optional()
}