import { z } from "zod"

export const inputParamsSchema = {
  "skuCode": z.string().min(0).max(64),
  "warehouseCode": z.string().min(0).max(64),
  "ownerCode": z.string().min(0).max(64),
  "skuName": z.string().min(0).max(128),
  "style": z.string().optional(),
  "color": z.string().optional(),
  "size": z.string().optional(),
  "brand": z.string().optional(),
  "weight": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `weight` to the tool, first call the tool `expandSchema` with \"/properties/weight\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>重量信息</property-description>").optional(),
  "volumeDTO": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `volumeDTO` to the tool, first call the tool `expandSchema` with \"/properties/volumeDTO\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>体积信息</property-description>").optional(),
  "skuAttribute": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `skuAttribute` to the tool, first call the tool `expandSchema` with \"/properties/skuAttribute\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>商品属性信息</property-description>").optional(),
  "skuConfig": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `skuConfig` to the tool, first call the tool `expandSchema` with \"/properties/skuConfig\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>商品配置信息</property-description>").optional(),
  "skuPackage": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `skuPackage` to the tool, first call the tool `expandSchema` with \"/properties/skuPackage\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>商品包装信息</property-description>").optional(),
  "skuBarcode": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `skuBarcode` to the tool, first call the tool `expandSchema` with \"/properties/skuBarcode\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>商品条码信息</property-description>").optional(),
  "skuFirstCategory": z.string().optional()
}