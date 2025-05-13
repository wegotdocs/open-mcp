import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().optional(),
  "warehouseCode": z.string().min(0).max(64),
  "warehouseName": z.string().min(0).max(128),
  "warehouseType": z.enum(["CENTER_WAREHOUSE","DELIVERY_WAREHOUSE","TRANSIT_WAREHOUSE","HUB_WAREHOUSE","FACTORY_WAREHOUSE","RETURN_WAREHOUSE","FRONT_WAREHOUSE"]),
  "warehouseAttrType": z.enum(["NORMAL","COLD_CHAIN","DANGEROUS","BONDED"]),
  "warehouseLevel": z.enum(["A","B","C","D","E","F"]),
  "warehouseLabel": z.string().min(0).max(64).optional(),
  "businessType": z.enum(["TOB","TOC","RETURN","CROSS_BORDER","CONSUMABLES"]),
  "structureType": z.enum(["STEEL","FLOOR","FLAT","OUTSIDE"]),
  "area": z.number().int().gte(0).optional(),
  "height": z.number().int().gte(0).optional(),
  "virtualWarehouse": z.boolean().optional(),
  "contactorDTO": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `contactorDTO` to the tool, first call the tool `expandSchema` with \"/properties/contactorDTO\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "addressDTO": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `addressDTO` to the tool, first call the tool `expandSchema` with \"/properties/addressDTO\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "version": z.number().int().optional()
}