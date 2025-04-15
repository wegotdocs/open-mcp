import { z } from "zod"

export const inputParams = {
  "app_origin": z.string().describe("业务来源").optional(),
  "bundle_id": z.string().describe("com.alipay.alipaywallet:支付宝，com.amap.app:高德").optional(),
  "mini_app_id": z.string().describe("小程序ID，仅特殊场景使用，普通业务方无需关注该参数。").optional(),
  "page_num": z.string().describe("页码").optional(),
  "page_size": z.string().describe("分页数").optional(),
  "version_status": z.string().describe("INIT:开发中，RELEASE:上架，OFFLINE:下架，AUDITING:审核中，AUDIT_REJECT:审核驳回，WAIT_RELEASE:待上架，GRAY:灰度中，以,号隔开").optional()
}