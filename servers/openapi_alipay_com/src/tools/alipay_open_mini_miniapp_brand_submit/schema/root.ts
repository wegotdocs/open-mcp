import { z } from "zod"

export const inputParams = {
  "apply_type": z.string().describe("申请的资质类型\tSELF_BRAND_APPLY 自有品牌申请(当需要一个新的品牌时选择此项)\tAUTHORIZE_BRAND_APPLY 授权品牌申请(当需要授权一个已有的品牌给商户时选择此项)\tEXIST_BRAND_BIND 品牌绑定，适用于品牌已申请成功的情况(当需要将已有品牌绑定到无品牌小程序时选择此项)").optional(),
  "authorize_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `authorize_info` to the tool, first call the tool `expandSchema` with \"/properties/authorize_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "brand_id": z.string().describe("商户已有品牌Id(只有申请的资质类型为EXIST_BRAND_BIND 时需要填写)").optional(),
  "brand_name": z.string().describe("品牌名称").optional(),
  "brand_registration_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `brand_registration_info` to the tool, first call the tool `expandSchema` with \"/properties/brand_registration_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "id_materials": z.array(z.string()).describe("申请人身份证明材料(当前只支持图片类型，请调用alipay.open.mini.miniapp.brand.upload接口上传图片，可以上传多个身份证明材料)").optional()
}