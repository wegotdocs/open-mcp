import { z } from "zod"

export const inputParams = {
  "access_version": z.string().describe("接入版本").optional(),
  "biz_no_prefix": z.string().describe("业务卡号前缀，由商户指定\t\t支付宝业务卡号生成规则：biz_no_prefix(商户指定)卡号前缀 + biz_no_suffix(实时生成）卡号后缀").optional(),
  "biz_no_suffix_len": z.string().describe("业务卡号后缀长度，与biz_no_prefix配合，扣除系统预留2位，剩下对应seq长度。在生成卡号时，若seq位数不足前置补0，若seq位数超出则以实际为准。举例：设为10，其中8位用于生成seq，可覆盖1亿用户，即使seq超过1亿，生成卡号也不报错，但总长度不得超过32位。建议按需设置合适的值，以获得长度一致的业务卡号，建议长度20，性能更好。").optional(),
  "card_action_list": z.array(z.object({ "code": z.string().describe("行动点业务CODE，商户自定义").optional(), "mini_app_url": z.object({ "display_on_list": z.string().describe("行动点按钮是否在列表页展示，true 或 false，不填则默认false；\t\t列表页可以配置展示最多2项小程序跳转行动点。").optional(), "mini_app_id": z.string().describe("小程序appId").optional(), "mini_page_param": z.string().describe("指定小程序页面，不填则默认跳转至对应小程序首页").optional(), "mini_query_param": z.string().describe("query参数，商户自定义传参，填入值将以\"query\"为参数名提交至指定小程序页面").optional() }).optional(), "text": z.string().describe("行动点展示文案").optional(), "url": z.string().describe("行动点跳转链接，当url_type填\"url\"或不填时必填，支持http(s)和支付宝schema地址等").optional(), "url_type": z.string().describe("跳转链接类型，不填则默认为url类型：\t\turl：对应填写url参数\t\tminiAppUrl: 对应填写mini_app_url参数，跳转至指定的支付宝小程序页面").optional() })).describe("\"卡行动点配置； 行动点，即用户可点击跳转的区块，类似按钮控件的交互； 单张卡最多定制3个行动点。如果各项的配置内容完全一样，展示时会进行去重。\"").optional(),
  "card_level_conf": z.array(z.object({ "level": z.string().describe("会员级别 该级别和开卡接口中的level要一致").optional(), "level_desc": z.string().describe("会员级别描述").optional(), "level_icon": z.string().describe("会员级别对应icon图片，\t\t会员信息预留字段，暂不在用户端展示；\t\t通过接口（alipay.offline.material.image.upload）上传图片").optional(), "level_show_name": z.string().describe("会员级别显示名称").optional() })).describe("卡级别配置").optional(),
  "card_spec_tag": z.string().describe("卡特定标签，只供特定业务使用，通常接入无需关注").optional(),
  "card_type": z.string().describe("卡类型").optional(),
  "column_info_list": z.array(z.object({ "code": z.string().describe("标准栏位：行为由支付宝统一定，同时已经分配标准Code\t\tBALANCE：会员卡余额\t\tPOINT：积分\t\tLEVEL：等级\t\tTELEPHONE：联系方式\t\t自定义栏位：行为由商户定义，自定义Code码（只要无重复）").optional(), "group_title": z.string().describe("若template_style_info.column_info_layout\t的值为grid，此项为宫格项所属分组标题。可空。如果需要展示该项，还需支付宝内部进行特殊配置。").optional(), "icon_id": z.string().describe("当template_style_info.column_info_layout\t的值为grid时，此参数必填。此项为宫格项的展示icon。通过接口（alipay.offline.material.image.upload）上传图片。").optional(), "more_info": z.object({ "descs": z.array(z.string()).describe("描述，当operate_type为openNative必填").optional(), "params": z.string().describe("扩展参数，需要URL地址回带的值，JSON格式(openweb时填)").optional(), "title": z.string().describe("二级页面标题，只有当operate_type为openNative时有效。").optional(), "url": z.string().describe("超链接(选择openweb的时候必须填写url参数内容)").optional() }).optional(), "operate_type": z.string().describe("1、openNative：打开二级页面，展现 more中descs\t\t2、openWeb：打开URL\t\t3、staticinfo：静态信息\t\t注意：\t\t不填则默认staticinfo；\t\t标准code尽量使用staticinfo，例如TELEPHONE商家电话栏位就只支持staticinfo；").optional(), "tag": z.string().describe("只有当template_style_info.column_info_layout\t的值为grid时，此参数有效。此项为宫格项标签，最多只会展示一个标签。").optional(), "title": z.string().describe("栏目标题").optional(), "value": z.string().describe("卡包详情页面，卡栏位右边展现的值\t\t\t\tTELEPHONE栏位的商家联系电话号码由此value字段传入").optional() })).describe("栏位信息").optional(),
  "field_rule_list": z.array(z.object({ "field_name": z.string().describe("模板字段规则\t字段名称(用于定义会员卡开卡接口时卡相应的参数)\t余额：Balance\t积分：Point\t等级：Level\t开卡日期：OpenDate\t过期日期：ValidDate").optional(), "rule_name": z.string().describe("规则名\t\t1、ASSIGN_FROM_REQUEST:   以rule_value为key值，表示该栏位的值从会员卡开卡接口中获取，会员卡开卡接口的card_info中获取对应参数值\t\t2、DATE_IN_FUTURE: 生成一个未来的日期（格式YYYY-MM-DD)，当选择DATE_IN_FUTURE的时候，field_name  必须是OpenDate或ValidDate， 值为(10m或10d 分别表示10个月或10天)\t\t3、CONST: 常量，会员卡开卡接口进行开卡的时候使用模板创建时候设置的值，即取rule_value的值").optional(), "rule_value": z.string().describe("规则值，根据rule_name，采取相应取值策略\t\tCONST：直接取rule_value作为卡属性值\t\tDATE_IN_FUTURE：10m或10d 分别表示10个月或10天\t\tASSIGN_FROM_REQUEST：在开卡Reuqest请求中按rule_value取值，现在和field_name对应的为（OpenDate、ValidDate、Level、Point、Balance）").optional() })).describe("\"字段规则列表，会员卡开卡过程中，会员卡信息的生成规则， 例如：卡有效期为开卡后两年内有效，则设置为：DATE_IN_FUTURE\"").optional(),
  "mdcode_notify_conf": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `mdcode_notify_conf` to the tool, first call the tool `expandSchema` with \"/properties/mdcode_notify_conf\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "notify_url": z.string().describe("通知地址").optional(),
  "open_card_conf": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `open_card_conf` to the tool, first call the tool `expandSchema` with \"/properties/open_card_conf\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "paid_outer_card_conf": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `paid_outer_card_conf` to the tool, first call the tool `expandSchema` with \"/properties/paid_outer_card_conf\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "pub_channels": z.array(z.object({ "ext_info": z.string().describe("扩展信息，无需配置").optional(), "pub_channel": z.string().describe("投放渠道类型（选择需要推广投放的渠道）\tSHOP_DETAIL：店铺详情页").optional() })).describe("卡模板投放渠道").optional(),
  "request_id": z.string().describe("请求ID，商家自定义且并保证唯一性。").optional(),
  "service_label_list": z.array(z.string()).describe("服务标签列表").optional(),
  "shop_ids": z.array(z.string()).describe("会员卡上架门店id（支付宝门店id），即发放会员卡的商家门店id").optional(),
  "spi_app_id": z.string().describe("spi应用id，为实现spi.alipay.user.opencard.get接口的app_id。若是第三方代理模式，可以设置成服务商的 APPID 或者是商家自己的 APPID；\t若不是第三方代理模式，只能设置商家自己的 APPID。").optional(),
  "template_benefit_info": z.array(z.object({ "benefit_desc": z.array(z.string()).describe("权益描述信息").optional(), "end_date": z.string().describe("权益结束时间").optional(), "start_date": z.string().describe("权益开始时间").optional(), "title": z.string().describe("权益描述").optional() })).describe("\"权益信息， 1、在卡包的卡详情页面会自动添加“会员权益”栏位，展现此字段配置的会员卡权益信息， 2、如果添加门店渠道，则可在门店页展现会员卡的权益\"").optional(),
  "template_form_config": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `template_form_config` to the tool, first call the tool `expandSchema` with \"/properties/template_form_config\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "template_style_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `template_style_info` to the tool, first call the tool `expandSchema` with \"/properties/template_style_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "write_off_type": z.string().describe("卡包详情页面中展现出的卡码（可用于扫码核销）\t\t(1) 静态码\tqrcode: 二维码，扫码得商户开卡传入的external_card_no\tbarcode: 条形码，扫码得商户开卡传入的external_card_no\t\t(2) 动态码-支付宝生成码值(动态码会在2分钟左右后过期)\tdqrcode: 动态二维码，扫码得到的码值可配合会员卡查询接口使用\tdbarcode: 动态条形码，扫码得到的码值可配合会员卡查询接口使用\t\t(3) 动态码-商家自主生成码值（码值、时效性都由商户控制）\tmdqrcode: 商户动态二维码，扫码得商户自主传入的码值\tmdbarcode: 商户动态条码，扫码得商户自主传入的码值\t如需使用商户动态码，对接详情参见 <a  href=\"https://opendocs.alipay.com/open/02y7gt\">商户动态发码</a>。").optional()
}