import { z } from "zod"

export const inputParams = {
  "activity_id": z.string().describe("活动id").optional(),
  "activity_name": z.string().describe("活动名称。").optional(),
  "activity_operation_status": z.string().describe("活动操作状态。").optional(),
  "activity_product_type": z.string().describe("券活动产品类型").optional(),
  "activity_status": z.string().describe("活动状态 。 ACTIVE:活动已激活，表示活动已经生效，等到活动开始(publish_start_time)之后用户就可以参与活动。  PAUSE:活动已暂停，表示商户临时暂停该活动，该状态下用户不能参与活动。").optional(),
  "belong_merchant_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `belong_merchant_info` to the tool, first call the tool `expandSchema` with \"/properties/activity_base_info/properties/belong_merchant_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "code_mode": z.string().describe("码模式。   MERCHANT_UPLOAD：商户上传自定义code，发券时系统随机选取上传的券code发放  MERCHANT_API：发奖时指定券码发奖，此模式无须提前上传券码。").optional(),
  "out_activity_id": z.string().describe("外部活动ID").optional()
}