import { z } from "zod"

export const inputParams = {
  "apdid_token": z.string().describe("设备指纹，用于唯一标识一台设备").optional(),
  "app_name": z.string().describe("人脸识别应用名称").optional(),
  "app_version": z.string().describe("人脸识别应用版本号").optional(),
  "base_ver": z.string().describe("基础包版本号").optional(),
  "bio_meta_info": z.string().describe("生物识别元信息").optional(),
  "device_model": z.string().describe("设备型号").optional(),
  "device_type": z.string().describe("设备类型").optional(),
  "ext_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `ext_info` to the tool, first call the tool `expandSchema` with \"/properties/ext_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "machine_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `machine_info` to the tool, first call the tool `expandSchema` with \"/properties/machine_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "merchant_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `merchant_info` to the tool, first call the tool `expandSchema` with \"/properties/merchant_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "os_version": z.string().describe("操作系统版本号").optional(),
  "remote_log_id": z.string().describe("业务ID").optional(),
  "zim_ver": z.string().describe("ZIM版本号").optional()
}