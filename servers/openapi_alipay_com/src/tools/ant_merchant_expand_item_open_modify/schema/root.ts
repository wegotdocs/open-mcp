import { z } from "zod"

export const inputParams = {
  "description": z.string().describe("商品描述").optional(),
  "ext_info": z.array(z.object({ "ext_key": z.string().describe("扩展信息的key").optional(), "ext_value": z.string().describe("扩展信息的值").optional() })).describe("商品扩展信息（覆盖商品已存在扩展信息、具体KEY请参见产品文档）").optional(),
  "item_id": z.string().describe("商品ID").optional(),
  "material_list": z.array(z.object({ "content": z.string().describe("素材内容（素材地址或素材KEY）").optional(), "type": z.string().describe("素材类型").optional() })).describe("商品素材列表（会和商品已存在素材做差异化比较后做增删改操作）").optional(),
  "name": z.string().describe("商品名称").optional(),
  "property_list": z.array(z.object({ "property_key": z.string().describe("属性名称").optional(), "property_value_list": z.array(z.string()).describe("属性值列表").optional() })).describe("商品属性列表（覆盖商品已存在属性）").optional(),
  "sku_list": z.array(z.object({ "inventory": z.number().int().describe("库存").optional(), "material_list": z.array(z.object({ "content": z.string().describe("素材内容（素材地址或素材KEY）").optional(), "type": z.string().describe("素材类型").optional() })).describe("SKU素材列表（会和SKU已存在素材做差异化比较后做增删改操作）").optional(), "original_price": z.number().int().describe("标价，单位分").optional(), "price": z.number().int().describe("售价，单位分").optional(), "property_list": z.array(z.object({ "property_key": z.string().describe("属性").optional(), "property_value": z.string().describe("属性值").optional() })).describe("SKU属性列表（覆盖SKU已存在属性）").optional(), "sku_id": z.string().describe("SKU ID（传空表示新增对应SKU）").optional() })).describe("SKU列表（会和商品已存在SKU做差异化比较后做增删改操作）").optional(),
  "standard_category_id": z.string().describe("商品所属标准类目ID，当 type 为STANDARD_GOODS（标品）时必填。 请填入 https://opendocs.alipay.com/mini/011lxt 小程序商品类目表中三级类目ID。").optional(),
  "status": z.string().describe("商品状态").optional(),
  "type": z.string().describe("商品类型：STANDARD_GOODS（标品）、NON_STANDARD_GOODS（非标品）").optional()
}