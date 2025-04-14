import { z } from "zod"

export const inputParams = {
  "app_category_ids": z.string().describe("小程序类目，可不传，不传取基础信息中的小程序类目").optional(),
  "app_desc": z.string().describe("小程序描述，可不传，不传取基础信息中的小程序描述").optional(),
  "app_english_name": z.string().describe("小程序在从未上架过版本之前，英文名称是可以修改的，该字段用于在提交审核时候修改小程序英文名称。注意：小程序一旦有过上架版本之后就不可以修改英文名称。").optional(),
  "app_logo": z.string().describe("小程序logo，可不传，不传取基础信息中的小程序logo，请调用专用的logo上传接口上传logo文件，并将返回的地址作为本字段传入").optional(),
  "app_name": z.string().describe("小程序在从未上架过版本之前，中文名称是可以修改的，该字段用于在提交审核时候修改小程序中文名称。注意：小程序一旦有过上架版本之后就不可以修改中文名称。").optional(),
  "app_origin": z.string().describe("来源类型，新接入方需要向支付宝申请专用来源，否则不予接入，申请方式请参见接入手册。").optional(),
  "app_slogan": z.string().describe("小程序应用简介，一句话描述小程序功能，如果不填默认采用当前小程序应用简介，10~32个字符").optional(),
  "app_version": z.string().describe("小程序版本号").optional(),
  "build_ext": z.string().describe("构建扩展参数").optional(),
  "bundle_id": z.string().describe("端信息").optional(),
  "isv_app_id": z.string().describe("三方应用ID").optional(),
  "license_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `license_info` to the tool, first call the tool `expandSchema` with \"/properties/license_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "mini_app_id": z.string().describe("小程序ID，特殊场景专用，普通业务方无需关注该参数。").optional(),
  "mini_category_ids": z.string().describe("新小程序前台类目，格式为 第一个一级类目_第一个二级类目;第二个一级类目_第二个二级类目_第二个三级类目，详细类目可以通过 https://docs.open.alipay.com/api_49/alipay.open.mini.category.query接口查询mini_category_list，如果不填默认采用当前小程序应用类目。使用默认应用类目后不需要再次上传营业执照号、营业执照名、营业执照截图、营业执照有效期。使用后不再读取app_category_ids值，老前台类目将废弃").optional(),
  "pid": z.string().describe("小程序开发者ID，可不传，不传取基础信息中的小程序开发者ID").optional(),
  "region_type": z.string().describe("服务区域类型,可不传，不传取基础信息中的小程序服务区域类型").optional(),
  "screen_shot_list": z.string().describe("版本截图，最少2张，最多5张，必传").optional(),
  "service_phone": z.string().describe("客服电话，可不传，不传取基础信息中的小程序客服电话").optional(),
  "special_license_pic_list": z.string().describe("特殊资质图片地址列表，逗号分割,").optional(),
  "template_id": z.string().describe("小程序模板ID").optional(),
  "template_version": z.string().describe("模板的版本号，如果不填写，则默认用模板当前最新的在架版本").optional(),
  "version_desc": z.string().describe("小程序版本描述，30-500个字符，一个中文占两个字符，一个英文或者数字占一个字符").optional()
}