import { z } from "zod"

export const inputParams = {
  "action_url": z.string().describe("活动链接，必须为关联的小程序的页面链接（链接以 alipays 开头），可参考<a href=\"https://opendocs.alipay.com/support/01rb18\"> 小程序scheme链接介绍 </a>").optional(),
  "background_word": z.string().describe("创建banner活动时，可添加底纹推广词，有机会在首页搜索框内展示，提升banner活动曝光机会").optional(),
  "box_id": z.string().describe("搜索直达配置id").optional(),
  "end_time": z.string().describe("活动结束时间，开始和结束时间之间不得超过90天").optional(),
  "material_id": z.string().describe("当material_type=\"IMAGE\"时，为图片id；当material_type=\"VIDEO\"时，为视频id。小程序直达仅支持图片类型。图片id可以通过调用<a href=\"https://opendocs.alipay.com/mini/03hvl1?ref=api\"> 支付宝文件上传接口 </a>上传图片，获取图片id(bizCode：search_box_banner)。<a href=\"https://opendocs.alipay.com/b/03al6f\"> 图片规范 </a>").optional(),
  "material_type": z.string().describe("IMAGE-图片/VIDEO-视频").optional(),
  "merchant_id": z.string().describe("商户id，代运营模式下传入。代运营模式，需要服务商已获得商家\"运营支付宝小程序\"授权。").optional(),
  "oriented_rule": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `oriented_rule` to the tool, first call the tool `expandSchema` with \"/properties/oriented_rule\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "start_time": z.string().describe("活动开始时间，开始和结束时间之间不得超过90天").optional(),
  "target_appid": z.string().describe("跳转应用ID").optional(),
  "target_appname": z.string().describe("跳转小程序名称").optional(),
  "target_regions": z.array(z.object({ "region_code": z.string().describe("区域编码，参考<a href=\"https://opendocs.alipay.com/pre-open/03144c\" target=\"_blank\">取值说明</a>").optional(), "region_name": z.string().describe("区域名，参考<a href=\"https://opendocs.alipay.com/pre-open/03144c\" target=\"_blank\">取值说明</a>").optional(), "region_type": z.string().describe("区域类型，1代表全国，2代表省级区域，3代表市级区域，参考<a href=\"https://opendocs.alipay.com/pre-open/03144c\" target=\"_blank\">取值说明</a>").optional() })).describe("投放目标区域列表").optional(),
  "title": z.string().describe("活动标题").optional(),
  "video_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `video_info` to the tool, first call the tool `expandSchema` with \"/properties/video_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}