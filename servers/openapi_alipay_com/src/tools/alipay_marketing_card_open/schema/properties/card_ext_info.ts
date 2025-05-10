import { z } from "zod"

export const inputParams = {
  "balance": z.string().describe("资金卡余额，单位：元，精确到小数点后两位。").optional(),
  "biz_card_no": z.string().describe("支付宝业务卡号\t\t说明：\t\t1、开卡成功后返回该参数，需要保存留用；\t\t2、开卡/更新/删卡/查询卡接口请求中不需要传该参数；").optional(),
  "custom_assets": z.string().describe("会员卡自定义资产值，只供特定业务使用，通常接入无需关注").optional(),
  "external_card_no": z.string().describe("用户在商户crm系统中的会员卡卡号，该参数必填。").optional(),
  "front_image_id": z.string().describe("卡面展示图片的图片ID，通过接口（alipay.offline.material.image.upload）上传图片\t\t\t\t这里预期展示的是个人照片；\t\t图片说明：1M以内，格式bmp、png、jpeg、jpg、gif；\t\t图片尺寸为230*295px，可等比放大；").optional(),
  "front_text_list": z.array(z.object({ "label": z.string().describe("文案标签").optional(), "value": z.string().describe("展示文案").optional() })).describe("卡面文案列表，1项对应1行文案，最多只能传入4行文案；\r\t单行文案展现分为左右两部分，左边对应label字段，右边对应value；\r\t形如： 学院    新闻学院").optional(),
  "level": z.string().describe("会员卡等级（由商户自定义，并可以在卡模板创建时，定义等级信息）").optional(),
  "mdcode_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `mdcode_info` to the tool, first call the tool `expandSchema` with \"/properties/card_ext_info/properties/mdcode_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "open_date": z.string().describe("会员卡开卡时间，格式为yyyy-MM-dd HH:mm:ss。会员卡更新时，该时间不支持修改。").optional(),
  "point": z.string().describe("会员卡积分，积分必须为数字型（可为浮点型，带2位小数点）").optional(),
  "template_id": z.string().describe("会员卡更换不同的卡模板（该参数仅用在会员卡更新接口中）").optional(),
  "valid_date": z.string().describe("会员卡有效期结束时间，格式为yyyy-MM-dd HH:mm:ss。会员卡更新时，该时间不支持修改。").optional()
}