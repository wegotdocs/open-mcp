import { z } from "zod"

export const inputParams = {
  "detail_url": z.string().describe("详情地址").optional(),
  "ext_info": z.string().describe("商品扩展信息：可以解析成 Map<String, String> 的 json string").optional(),
  "external_item_id": z.string().describe("外部商品ID").optional(),
  "front_category_id": z.string().describe("前台类目id：target_type + target_id 和 front_category_id 二选一").optional(),
  "label_list": z.array(z.object({ "label_key": z.string().describe("标签键\r\tOIL_NUM：油号").optional(), "label_value": z.string().describe("标签值：\r\tOIL_NUM对应的值为：95# 92# 98# 等等").optional() })).describe("商品标签列表").optional(),
  "main_pic": z.string().describe("主图地址").optional(),
  "name": z.string().describe("商品名称").optional(),
  "scene": z.string().describe("场景：GAS_CHARGE（加油）").optional(),
  "sku_list": z.array(z.object({ "cost_price": z.number().int().describe("成本价，单位分").optional(), "ext_info": z.array(z.object({ "ext_key": z.string().describe("扩展信息的key").optional(), "ext_value": z.string().describe("扩展信息的值").optional() })).describe("SKU扩展信息").optional(), "external_sku_id": z.string().describe("外部SKU ID").optional(), "inventory": z.number().int().describe("库存").optional(), "original_price": z.number().int().describe("标价，单位分").optional(), "price": z.number().int().describe("售价，单位分").optional() })).describe("商品sku列表，至少有一个").optional(),
  "target_id": z.string().describe("商户归属主体id").optional(),
  "target_type": z.string().describe("商品归属主体类型：target_type + target_id 和 front_category_id 二选一\r\t\r\t商品归属主体类型:\r\t5: 店铺\r\t4: 主站MID\r\t3: 参与者\r\t2: 角色\r\t1: 联系人").optional()
}