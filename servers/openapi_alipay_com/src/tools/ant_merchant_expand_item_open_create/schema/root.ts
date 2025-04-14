import { z } from "zod"

export const inputParams = {
  "description": z.string().describe("商品描述").optional(),
  "ext_info": z.array(z.object({ "ext_key": z.string().describe("扩展信息的key").optional(), "ext_value": z.string().describe("扩展信息的值").optional() })).describe("商品扩展信息（具体KEY请参见产品文档）。 小程序订单中心场景接入参见 <a href=\"https://opendocs.alipay.com/mini/024hj4\">接入指南</a>。").optional(),
  "material_list": z.array(z.object({ "content": z.string().describe("素材内容（素材地址或素材KEY）").optional(), "type": z.string().describe("素材类型").optional() })).describe("素材列表（最多3个），素材内容为素材key（素材key为<a href=\"https://opendocs.alipay.com/apis/api_4/alipay.merchant.item.file.upload\">alipay.merchant.item.file.upload</a> 接口返回的 material_key）").optional(),
  "name": z.string().describe("商品名称").optional(),
  "property_list": z.array(z.object({ "property_key": z.string().describe("属性名称").optional(), "property_value_list": z.array(z.string()).describe("属性值列表").optional() })).describe("商品属性列表").optional(),
  "scene": z.string().describe("业务场景码。").optional(),
  "sku_list": z.array(z.object({ "inventory": z.number().int().describe("库存").optional(), "material_list": z.array(z.object({ "content": z.string().describe("素材内容（素材地址或素材KEY）").optional(), "type": z.string().describe("素材类型").optional() })).describe("SKU素材列表（最多3个）").optional(), "original_price": z.number().int().describe("标价，单位分").optional(), "price": z.number().int().describe("售价，单位分").optional(), "property_list": z.array(z.object({ "property_key": z.string().describe("属性").optional(), "property_value": z.string().describe("属性值").optional() })).describe("SKU属性列表").optional() })).describe("商品SKU列表（至少1个，最多20个）").optional(),
  "standard_category_id": z.string().describe("商品所属标准类目ID，标品及非标品都需传入。 请填入 <a href=\"https://opendocs.alipay.com/mini/011lxt\">小程序商品类目表</a> 中三级类目ID。").optional(),
  "target_id": z.string().describe("商品归属主体ID\t例：商品归属主体类型target_type为店铺，则商品归属主体ID为店铺ID（支付宝侧店铺ID）；归属主体类型target_type为小程序，则归属主体ID为小程序ID").optional(),
  "target_type": z.string().describe("商品归属主体类型。枚举如下：\t5：店铺。\t8：小程序。").optional(),
  "type": z.string().describe("商品类型。枚举支持：\tSTANDARD_GOODS：标品，一般是具有明确、标准规格、型号、参数的商品，如：手机、数码产品、大多数的家电 。\tNON_STANDARD_GOODS：非标品，则是在这些方面没有统一的行业标准和参数规格的商品，如：服装、鞋袜等。").optional()
}