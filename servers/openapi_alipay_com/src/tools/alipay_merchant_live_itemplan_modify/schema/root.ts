import { z } from "zod"

export const inputParams = {
  "content": z.array(z.object({ "codes": z.array(z.string()).describe("对应服务库编码").optional(), "type": z.string().describe("条目类型，必须， 商品：ITEM").optional() })).describe("投放内容，数组，内容为具体条目").optional(),
  "end_time": z.string().describe("可空，计划截止时间").optional(),
  "op_type": z.string().describe("针对投放内容的操作， 包含3种类型：\t覆盖:OVERRIDE \t追加:APPEND \t删除:DELETE").optional(),
  "operator_appid": z.string().describe("投放方标识，一般为小程序id").optional(),
  "operator_type": z.string().describe("投放方类型，生活号：LIFE_APP 达人：CONTENT_USER 小程序：TINYAPP").optional(),
  "plan_name": z.string().describe("投放计划名，可空").optional(),
  "start_time": z.string().describe("可空，计划生效时间").optional(),
  "status": z.number().int().describe("计划状态 0待生效 1生效中 -1已作废").optional(),
  "target_id": z.string().describe("投放目标，一般为生活号id，多个逗号隔开").optional(),
  "target_range": z.string().describe("投放范围， 指主体内的具体子渠道，为空则任意子渠道").optional(),
  "target_type": z.string().describe("投放目标类型\t生活号：LIFE_APP \t达人：CONTENT_USER \t小程序:TINYAPP").optional()
}