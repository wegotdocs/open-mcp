import { z } from "zod"

export const inputParams = {
  "agreement_sign_params": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `agreement_sign_params` to the tool, first call the tool `expandSchema` with \"/properties/agreement_sign_params\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "alipay_store_id": z.string().describe("支付宝店铺编号。\t指商户创建门店后支付宝生成的门店ID。").optional(),
  "bkagent_req_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `bkagent_req_info` to the tool, first call the tool `expandSchema` with \"/properties/bkagent_req_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "body": z.string().describe("订单附加信息。\t如果请求时传递了该参数，将在异步通知、对账单中原样返回，同时会在商户和用户的pc账单详情中作为交易描述展示").optional(),
  "business_params": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `business_params` to the tool, first call the tool `expandSchema` with \"/properties/business_params\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "buyer_id": z.string().describe("买家支付宝用户ID。\t2088开头的16位纯数字，小程序场景下获取用户ID请参考：<a target=\"_blank\" href=\"https://opendocs.alipay.com/mini/introduce/authcode\" >用户授权</a>;\t其它场景下获取用户ID请参考：<a target=\"_blank\" href=\"https://opendocs.alipay.com/open/284/106001/#s4\" >网页授权获取用户信息</a>;\t注：交易的买家与卖家不能相同。").optional(),
  "buyer_logon_id": z.string().describe("买家支付宝登录账号。 建议通过open_id来传递买家信息。").optional(),
  "buyer_open_id": z.string().describe("买家支付宝用户唯一标识").optional(),
  "disable_pay_channels": z.string().describe("禁用渠道,用户不可用指定渠道支付，多个渠道以逗号分割\r\t注，与enable_pay_channels互斥\r\t<a href=\"https://docs.open.alipay.com/common/wifww7\">渠道列表</a>").optional(),
  "discountable_amount": z.string().describe("可打折金额。\t参与优惠计算的金额，单位为元，精确到小数点后两位，取值范围[0.01,100000000]。 \t如果同时传入了【可打折金额】、【不可打折金额】和【订单总金额】，则必须满足如下条件：【订单总金额】=【可打折金额】+【不可打折金额】。\t如果订单金额全部参与优惠计算，则【可打折金额】和【不可打折金额】都无需传入。").optional(),
  "enable_pay_channels": z.string().describe("指定支付渠道。\t用户只能使用指定的渠道进行支付，多个渠道以逗号分割。\t与disable_pay_channels互斥，支持传入的值：<a target=\"_blank\" href=\"https://docs.open.alipay.com/common/wifww7\">渠道列表</a>。\t注：如果传入了指定支付渠道，则用户只能用指定内的渠道支付，包括营销渠道也要指定才能使用。该参数可能导致用户支付受限，慎用。").optional(),
  "ext_user_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `ext_user_info` to the tool, first call the tool `expandSchema` with \"/properties/ext_user_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "extend_params": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `extend_params` to the tool, first call the tool `expandSchema` with \"/properties/extend_params\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "goods_detail": z.array(z.object({ "alipay_goods_id": z.string().describe("支付宝定义的统一商品编号").optional(), "body": z.string().describe("商品描述信息").optional(), "categories_tree": z.string().describe("商品类目树，从商品类目根节点到叶子节点的类目id组成，类目id值使用|分割").optional(), "goods_category": z.string().describe("商品类目").optional(), "goods_id": z.string().describe("商品的编号，该参数传入支付券上绑定商品goods_id,\t倘若无支付券需要消费，该字段传入商品最小粒度的商品ID（如：若商品有sku粒度，则传商户sku粒度的ID）").optional(), "goods_name": z.string().describe("商品名称").optional(), "out_item_id": z.string().describe("商家侧小程序商品ID，指商家提报给小程序商品库的商品。当前接口的extend_params.trade_component_order_id字段不为空时该字段必填，且与交易组件订单参数保持一致。了解小程序商品请参考：<a href=\"https://opendocs.alipay.com/mini/06uila?pathHash=63b6fba7\">https://opendocs.alipay.com/mini/06uila?pathHash=63b6fba7</a>").optional(), "out_sku_id": z.string().describe("商家侧小程序商品ID，指商家提报给小程序商品库的商品。当前接口的extend_params.trade_component_order_id字段不为空时该字段必填，且与交易组件订单参数保持一致。了解小程序商品请参考：<a target=\"_blank\" href=\"https://opendocs.alipay.com/mini/06uila?pathHash=63b6fba7\" >https://opendocs.alipay.com/mini/06uila?pathHash=63b6fba7</a>").optional(), "price": z.string().describe("商品单价，单位为元").optional(), "quantity": z.number().int().describe("商品数量").optional(), "show_url": z.string().describe("商品的展示地址").optional() })).describe("订单包含的商品列表信息，json格式。").optional(),
  "logistics_detail": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `logistics_detail` to the tool, first call the tool `expandSchema` with \"/properties/logistics_detail\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "merchant_order_no": z.string().describe("商户的原始订单号").optional(),
  "notify_url": z.string().describe("通知地址").optional(),
  "op_app_id": z.string().describe("小程序支付中，商户实际经营主体的小程序应用的appid").optional(),
  "op_buyer_open_id": z.string().describe("买家支付宝用户唯一标识（商户实际经营主体的小程序应用关联的买家open_id）").optional(),
  "operator_id": z.string().describe("商户操作员编号。").optional(),
  "out_trade_no": z.string().describe("商户订单号。\t由商家自定义，64个字符以内，仅支持字母、数字、下划线且需保证在商户端不重复。").optional(),
  "passback_params": z.string().describe("公用回传参数。\t如果请求时传递了该参数，支付宝会在异步通知时将该参数原样返回。").optional(),
  "product_code": z.string().describe("产品码。\t商家和支付宝签约的产品码。 枚举值（点击查看签约情况）：\t<a target=\"_blank\" href=\"https://opensupport.alipay.com/support/codelab/detail/486/487\">FACE_TO_FACE_PAYMENT</a>：当面付产品；\t默认值为FACE_TO_FACE_PAYMENT。").optional(),
  "query_options": z.array(z.string()).describe("返回参数选项。 商户通过传递该参数来定制需要额外返回的信息字段，数组格式。包括但不限于：[\"enterprise_pay_info\",\"hyb_amount\"]").optional(),
  "receiver_address_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `receiver_address_info` to the tool, first call the tool `expandSchema` with \"/properties/receiver_address_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "royalty_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `royalty_info` to the tool, first call the tool `expandSchema` with \"/properties/royalty_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "seller_id": z.string().describe("卖家支付宝用户ID。\t当需要指定收款账号时，通过该参数传入，如果该值为空，则默认为商户签约账号对应的支付宝用户ID。\t收款账号优先级规则：门店绑定的收款账户>请求传入的seller_id>商户签约账号对应的支付宝用户ID；\t注：直付通和机构间联场景下seller_id无需传入或者保持跟pid一致；\t如果传入的seller_id与pid不一致，需要联系支付宝小二配置收款关系；").optional(),
  "settle_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `settle_info` to the tool, first call the tool `expandSchema` with \"/properties/settle_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "store_id": z.string().describe("商户门店编号。\t指商户创建门店时输入的门店编号。").optional(),
  "sub_merchant": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `sub_merchant` to the tool, first call the tool `expandSchema` with \"/properties/sub_merchant\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "subject": z.string().describe("订单标题。\t注意：不可使用特殊字符，如 /，=，& 等。").optional(),
  "terminal_id": z.string().describe("商户机具终端编号。").optional(),
  "time_expire": z.string().describe("订单绝对超时时间。\t格式为yyyy-MM-dd HH:mm:ss。\t注：time_expire和timeout_express两者只需传入一个或者都不传，如果两者都传，优先使用time_expire。").optional(),
  "timeout_express": z.string().describe("订单相对超时时间。从交易创建时间开始计算。\t该笔订单允许的最晚付款时间，逾期将关闭交易。取值范围：1m～15d。m-分钟，h-小时，d-天，1c-当天（1c-当天的情况下，无论交易何时创建，都在0点关闭）。 该参数数值不接受小数点， 如 1.5h，可转换为 90m。\t当面付场景默认值为3h，如需指定，推荐设置5m及以上。\t\t注：time_expire和timeout_express两者只需传入一个或者都不传，如果两者都传，优先使用time_expire。").optional(),
  "total_amount": z.string().describe("订单总金额。\t单位为元，精确到小数点后两位，取值范围：[0.01,100000000] 。").optional(),
  "undiscountable_amount": z.string().describe("不可打折金额。\t不参与优惠计算的金额，单位为元，精确到小数点后两位，取值范围[0.01,100000000]。 \t如果同时传入了【可打折金额】、【不可打折金额】和【订单总金额】，则必须满足如下条件：【订单总金额】=【可打折金额】+【不可打折金额】。\t如果订单金额全部参与优惠计算，则【可打折金额】和【不可打折金额】都无需传入。").optional()
}