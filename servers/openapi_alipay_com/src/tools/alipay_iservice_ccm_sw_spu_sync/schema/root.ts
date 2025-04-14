import { z } from "zod"

export const inputParams = {
  "attribute": z.array(z.object({ "name": z.string().describe("商品属性名").optional(), "value": z.array(z.string()).describe("商品属性值").optional() })).describe("商品属性列表").optional(),
  "brand": z.string().describe("商品品牌").optional(),
  "category": z.string().describe("商品类目，用于商品库中分类").optional(),
  "description": z.string().describe("商品描述").optional(),
  "icon": z.string().describe("商品图片链接\t特殊可选规则：is_delete=false的情况下必填").optional(),
  "is_delete": z.string().describe("默认为false，为true，表示删除知识点").optional(),
  "library_id": z.number().int().describe("知识库id").optional(),
  "library_name": z.string().describe("知识库名称").optional(),
  "link_url": z.string().describe("商品链接\t特殊可选规则：is_delete=false的情况下必填").optional(),
  "original_price": z.string().describe("商品原价").optional(),
  "price": z.string().describe("商品售价\t特殊可选规则：is_delete=false的情况下必填").optional(),
  "spu_id": z.string().describe("商品ID").optional(),
  "status": z.string().describe("商品状态：AVAILABLE 表示可售卖,SOLD_OUT为售罄/不可卖，默认可售卖").optional(),
  "title": z.string().describe("商品名称\t特殊可选规则：is_delete=false的情况下必填").optional()
}