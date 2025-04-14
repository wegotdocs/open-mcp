import { z } from "zod"

export const inputParams = {
  "apply_id": z.string().describe("申请单id").optional(),
  "apply_type": z.string().describe("申请类型 BASE：基础信息， BRAND_BOX：品牌直达，SERVICE_BOX服务直达").optional(),
  "brand_template_id": z.string().describe("品牌的模板id ONE_WITH_TWO：一拖二、DEFAULT：一拖四").optional(),
  "service_code": z.string().describe("服务code").optional(),
  "spec_code": z.string().describe("服务的类型默认使用小程序 SP_MINI_APP 小程序 SP_PUBLIC_APP 生活号").optional()
}