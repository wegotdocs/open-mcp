import { z } from "zod"

export const inputParams = {
  "apply_type": z.string().describe("申请类型 BASE：基础信息， BRAND_BOX：品牌直达，SERVICE_BOX服务直达").optional(),
  "audit_status_list": z.array(z.string()).describe("筛选状态数组 AUDIT AGREE REJECT CANCEL EDIT").optional(),
  "category_code": z.string().describe("类目编码").optional(),
  "name": z.string().describe("服务名称").optional(),
  "page_num": z.string().describe("当前页码").optional(),
  "page_size": z.string().describe("页面的显示记录条数").optional(),
  "service_code": z.string().describe("服务code").optional(),
  "service_id": z.string().describe("小程序appid").optional(),
  "start_row": z.string().describe("起始记录，起始：0").optional(),
  "sub_service_code": z.string().describe("二级服务code").optional()
}