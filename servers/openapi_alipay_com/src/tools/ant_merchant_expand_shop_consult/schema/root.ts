import { z } from "zod"

export const inputParams = {
  "biz_cards": z.array(z.object({ "account_branch_name": z.string().describe("开户支行名").optional(), "account_holder_name": z.string().describe("卡户名").optional(), "account_inst_city": z.string().describe("开户行所在地-市").optional(), "account_inst_id": z.string().describe("开户行简称缩写").optional(), "account_inst_name": z.string().describe("银行名称").optional(), "account_inst_province": z.string().describe("开户行所在地-省").optional(), "account_no": z.string().describe("银行卡号").optional(), "account_type": z.string().describe("卡类型\r\t借记卡-DC\r\t信用卡-CC").optional(), "bank_code": z.string().describe("联行号").optional(), "usage_type": z.string().describe("账号使用类型\r\t对公-01\r\t对私-02").optional() })).describe("\"门店结算卡信息。本业务当前只允许传入一张结算卡。 说明：本参数仅直付通业务使用，其余业务无需关注。\"").optional(),
  "brand_id": z.string().describe("品牌id，非加油站等特殊门店无需关注。").optional(),
  "business_address": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `business_address` to the tool, first call the tool `expandSchema` with \"/properties/business_address\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "business_time": z.array(z.object({ "close_time": z.string().describe("关门时间 格式：HH:mm").optional(), "open_time": z.string().describe("开门时间 格式：HH:mm").optional(), "week_day": z.number().int().describe("本对象表示周几的营业时间。1~6表示周一到周六，7表示周日").optional() })).describe("店铺经营时间。").optional(),
  "cert_image": z.string().describe("营业执照图片KEY。通过<a href=\"https://opendocs.alipay.com/apis/api_1/ant.merchant.expand.indirect.image.upload\">ant.merchant.expand.indirect.image.upload</a> 接口上传图片后得到的 image_id").optional(),
  "cert_name": z.string().describe("营业执照名称，填写值为营业执照或统一社会信用代码证上的名称。").optional(),
  "cert_no": z.string().describe("证件号码，请填写店铺营业执照号。").optional(),
  "cert_type": z.string().describe("证件类型").optional(),
  "contact_infos": z.array(z.object({ "email": z.string().describe("电子邮箱").optional(), "id_card_no": z.string().describe("身份证号").optional(), "mobile": z.string().describe("手机号").optional(), "name": z.string().describe("联系人名字").optional(), "phone": z.string().describe("电话").optional(), "tag": z.array(z.string()).describe("商户联系人业务标识枚举，表示商户联系人的职责").optional(), "type": z.string().describe("联系人类型，取值范围：LEGAL_PERSON：法人；CONTROLLER：实际控制人；AGENT：代理人；OTHER：其他").optional() })).describe("联系人信息。如果填写，其中名称必填，手机、固话、email 三选一必填。").optional(),
  "contact_mobile": z.string().describe("店铺联系手机，与店铺联系固话二选一必填").optional(),
  "contact_phone": z.string().describe("店铺的联系固话，和店铺联系手机二选一必填").optional(),
  "ext_infos": z.array(z.object({ "key_name": z.string().describe("KV数据对的key，表示该kv对象表示什么含义。").optional(), "value": z.string().describe("kv对象的值").optional() })).describe("扩展信息列表。key值需要向对应行业的bd进行申请。").optional(),
  "ip_role_id": z.string().describe("商户角色id，表示将要开的店属于哪个商户角色。对于直连开店场景，填写商户pid；对于间连开店场景（线上、线下、直付通），填写商户smid。特别说明：IoT设备三绑定场景统一填写商户pid").optional(),
  "legal_cert_no": z.string().describe("法人身份证号").optional(),
  "legal_name": z.string().describe("法人名称。").optional(),
  "license_auth_letter_image": z.string().describe("营业执照授权函。需传入<a href=\"https://opendocs.alipay.com/apis/api_1/ant.merchant.expand.indirect.image.upload\">ant.merchant.expand.indirect.image.upload</a> 接口上传图片后得到的 image_id。\t蚂蚁门店管理场景可选。").optional(),
  "memo": z.string().describe("备注").optional(),
  "out_door_images": z.string().describe("门头照 id，需传入 <a href=\"https://opendocs.alipay.com/apis/api_1/ant.merchant.expand.indirect.image.upload\">ant.merchant.expand.indirect.image.upload</a> 接口上传图片后得到的 image_id").optional(),
  "qualifications": z.array(z.object({ "industry_qualification_image": z.string().describe("商户行业资质图片。其值为通过ant.merchant.expand.indirect.image.upload上传图片得到的image_id").optional(), "industry_qualification_type": z.string().describe("<a href=\"https://gw.alipayobjects.com/os/bmw-prod/7aa3a36b-2bc2-4d57-815f-08edd55ef67e.xlsx\">商户行业资质类型，具体选值参见文档</a>").optional() })).describe("行业特殊资质。").optional(),
  "scene": z.string().describe("场景，非加油站等特殊门店无需关注。").optional(),
  "settle_alipay_logon_id": z.string().describe("结算支付宝账号的登录号，需传入小程序归属账号。若需增加收款账号，可在创建门店后登录<a href=\"https://b.alipay.com/index2.htm\">商家中心</a> ，在 账户中心 > 经营信息 > 门店管理 中选择对应门店选择 更多 > 编辑 > 新增收款账号。").optional(),
  "shop_category": z.string().describe("新版门店类目标准二级类目code。类目标准及与原类目映射关系参见 <a href=\"https://ur.alipay.com/4cmn0n\">支付宝门店类目-最新</a> 表格。").optional(),
  "shop_name": z.string().describe("店铺名称。直连开店要保证全局店铺名称+地址唯一，间连开店要保证服务商pid下店铺名称+地址唯一").optional(),
  "shop_type": z.string().describe("店铺经营类型，01表示直营，02表示加盟").optional(),
  "store_id": z.string().describe("门店编号，表示该门店在该商户角色id(直连pid，间连smid)下，由商户自己定义的外部门店编号").optional()
}