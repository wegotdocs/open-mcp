import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().optional(),
  "warehouseCode": z.string().min(0).max(64),
  "ownerCode": z.string().min(0).max(64),
  "ownerName": z.string().min(0).max(128),
  "ownerType": z.enum(["SELF","THIRD_PARTY"]),
  "contactorDTO": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `contactorDTO` to the tool, first call the tool `expandSchema` with \"/properties/contactorDTO\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "addressDTO": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `addressDTO` to the tool, first call the tool `expandSchema` with \"/properties/addressDTO\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "version": z.number().int().optional()
}