import { z } from "zod"

export const inputParams = {
  "access_type": z.string().describe("申请类型 BASE：基础信息， BRAND_BOX：品牌直达，SERVICE_BOX服务直达").optional(),
  "appid": z.string().describe("小程序ID").optional(),
  "page_num": z.string().describe("当前页").optional(),
  "page_size": z.string().describe("每页显示条数").optional(),
  "scene_code": z.string().describe("场景码").optional(),
  "spec_code": z.string().describe("服务类型 SP_MINI_APP 小程序 SP_PUBLIC_APP 生活号").optional()
}