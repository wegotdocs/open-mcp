import { z } from "zod"

export const inputParams = {
  "detail_url": z.string().describe("商品详情地址").optional(),
  "ext_info": z.string().describe("商品扩展信息：可以解析成 Map<String, String> 的 json string").optional(),
  "external_item_id": z.string().describe("外部商品ID（item_id不为空时作为普通更新项，item_id为空时作为更新KEY）").optional(),
  "front_category_id": z.string().describe("前台类目id, null表示未分类").optional(),
  "item_id": z.string().describe("商品id(和external_item_id不能同时为空)").optional(),
  "label_list": z.array(z.object({ "label_key": z.string().describe("标签键\r\tOIL_NUM：油号").optional(), "label_value": z.string().describe("标签值：\r\tOIL_NUM对应的值为：95# 92# 98# 等等").optional() })).describe("商品标签列表，null表示不修改标签列表，空list表示清空标签").optional(),
  "main_pic": z.string().describe("商品主图").optional(),
  "name": z.string().describe("商品名称").optional(),
  "op_timestamp": z.number().int().describe("更新时间戳（只处理时间戳最大的一次请求）").optional(),
  "scene": z.string().describe("场景：GAS_CHARGE（加油）").optional(),
  "sku_list": z.array(z.object({ "cost_price": z.number().int().describe("成本价，单位分").optional(), "ext_info": z.array(z.object({ "ext_key": z.string().describe("扩展信息的key").optional(), "ext_value": z.string().describe("扩展信息的值").optional() })).describe("SKU扩展信息").optional(), "external_sku_id": z.string().describe("外部skuId（sku_id不为空时作为普通更新项,sku_id为空时作为更新key,sku_id和该字段同时为空则新增该条数据）").optional(), "inventory": z.number().int().describe("库存").optional(), "original_price": z.number().int().describe("标价，单位分").optional(), "price": z.number().int().describe("售价，单位分").optional(), "sku_id": z.string().describe("skuId").optional(), "status": z.string().describe("商品SKU状态：EFFECT、INVALID").optional() })).describe("SKU列表（会和商品已存在SKU做差异化比较后做增删改操作）").optional(),
  "status": z.string().describe("商品状态：\r\tEFFECT（有效）、 INVALID（无效）").optional()
}