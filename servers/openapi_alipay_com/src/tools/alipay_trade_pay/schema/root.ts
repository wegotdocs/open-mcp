import { z } from "zod"

export const inputParams = {
  "advance_payment_type": z.string().describe("支付模式类型,若值为ENJOY_PAY_V2表示当前交易允许走先享后付2.0垫资").optional(),
  "agreement_params": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `agreement_params` to the tool, first call the tool `expandSchema` with \"/properties/agreement_params\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "alipay_store_id": z.string().describe("支付宝店铺编号。\t指商户创建门店后支付宝生成的门店ID。").optional(),
  "auth_code": z.string().describe("支付授权码。\t当面付场景传买家的付款码（25~30开头的长度为16~24位的数字，实际字符串长度以开发者获取的付款码长度为准）或者刷脸标识串（fp开头的35位字符串）；\t周期扣款或代扣场景无需传入，协议号通过agreement_params参数传递； \t支付宝预授权和新当面资金授权场景无需传入，授权订单号通过 auth_no字段传入。\t注：交易的买家与卖家不能相同。").optional(),
  "auth_confirm_mode": z.string().describe("预授权确认模式。\t适用于支付宝预授权和新当面资金授权场景。枚举值：\tCOMPLETE：转交易完成后解冻剩余冻结金额；\tNOT_COMPLETE：转交易完成后不解冻剩余冻结金额；\t默认值为NOT_COMPLETE。").optional(),
  "auth_no": z.string().describe("资金预授权单号。\t支付宝预授权和新当面资金授权场景下必填。").optional(),
  "bkagent_req_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `bkagent_req_info` to the tool, first call the tool `expandSchema` with \"/properties/bkagent_req_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "body": z.string().describe("订单附加信息。\t如果请求时传递了该参数，将在异步通知、对账单中原样返回，同时会在商户和用户的pc账单详情中作为交易描述展示").optional(),
  "business_params": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `business_params` to the tool, first call the tool `expandSchema` with \"/properties/business_params\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "buyer_id": z.string().describe("买家支付宝用户ID。\t支付宝预授权和新当面资金授权场景下必填，其它场景不需要传入。").optional(),
  "buyer_open_id": z.string().describe("买家支付宝用户唯一标识").optional(),
  "disable_pay_channels": z.string().describe("禁用支付渠道。\t多个渠道以逗号分割，如同时禁用信用支付类型和积分，则传入：\"credit_group,point\"。\t支持传入的值：<a target=\"_blank\" href=\"https://docs.open.alipay.com/common/wifww7\">渠道列表</a>").optional(),
  "discountable_amount": z.string().describe("可打折金额。\t参与优惠计算的金额，单位为元，精确到小数点后两位，取值范围[0.01,100000000]。 \t如果同时传入了【可打折金额】、【不可打折金额】和【订单总金额】，则必须满足如下条件：【订单总金额】=【可打折金额】+【不可打折金额】。\t如果订单金额全部参与优惠计算，则【可打折金额】和【不可打折金额】都无需传入。").optional(),
  "ext_user_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `ext_user_info` to the tool, first call the tool `expandSchema` with \"/properties/ext_user_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "extend_params": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `extend_params` to the tool, first call the tool `expandSchema` with \"/properties/extend_params\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "goods_detail": z.array(z.object({ "alipay_goods_id": z.string().describe("支付宝定义的统一商品编号").optional(), "body": z.string().describe("商品描述信息").optional(), "categories_tree": z.string().describe("商品类目树，从商品类目根节点到叶子节点的类目id组成，类目id值使用|分割").optional(), "goods_category": z.string().describe("商品类目").optional(), "goods_id": z.string().describe("商品的编号，该参数传入支付券上绑定商品goods_id,\t倘若无支付券需要消费，该字段传入商品最小粒度的商品ID（如：若商品有sku粒度，则传商户sku粒度的ID）").optional(), "goods_name": z.string().describe("商品名称").optional(), "out_item_id": z.string().describe("商家侧小程序商品ID，指商家提报给小程序商品库的商品。当前接口的extend_params.trade_component_order_id字段不为空时该字段必填，且与交易组件订单参数保持一致。了解小程序商品请参考：<a href=\"https://opendocs.alipay.com/mini/06uila?pathHash=63b6fba7\">https://opendocs.alipay.com/mini/06uila?pathHash=63b6fba7</a>").optional(), "out_sku_id": z.string().describe("商家侧小程序商品ID，指商家提报给小程序商品库的商品。当前接口的extend_params.trade_component_order_id字段不为空时该字段必填，且与交易组件订单参数保持一致。了解小程序商品请参考：<a target=\"_blank\" href=\"https://opendocs.alipay.com/mini/06uila?pathHash=63b6fba7\" >https://opendocs.alipay.com/mini/06uila?pathHash=63b6fba7</a>").optional(), "price": z.string().describe("商品单价，单位为元").optional(), "quantity": z.number().int().describe("商品数量").optional(), "show_url": z.string().describe("商品的展示地址").optional() })).describe("订单包含的商品列表信息，json格式。").optional(),
  "is_async_pay": z.boolean().describe("是否异步支付，传入true时，表明本次期望走异步支付，会先将支付请求受理下来，再异步推进。商户可以通过交易的异步通知或者轮询交易的状态来确定最终的交易结果。\t只在代扣场景下有效，其它场景无需传入。").optional(),
  "merchant_order_no": z.string().describe("商户的原始订单号").optional(),
  "notify_url": z.string().describe("通知地址").optional(),
  "operator_id": z.string().describe("商户操作员编号。").optional(),
  "out_trade_no": z.string().describe("商户订单号。\t由商家自定义，64个字符以内，仅支持字母、数字、下划线且需保证在商户端不重复。").optional(),
  "passback_params": z.string().describe("公用回传参数。\t如果请求时传递了该参数，支付宝会在异步通知时将该参数原样返回。").optional(),
  "pay_params": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `pay_params` to the tool, first call the tool `expandSchema` with \"/properties/pay_params\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "product_code": z.string().describe("产品码。 商家和支付宝签约的产品码。 枚举值（点击查看签约情况）： <a target=\"_blank\" href=\"https://opensupport.alipay.com/support/codelab/detail/486/487\">FACE_TO_FACE_PAYMENT</a>：当面付产品； <a target=\"_blank\" href=\"https://opensupport.alipay.com/support/codelab/detail/807/1419\">CYCLE_PAY_AUTH</a>：周期扣款产品； GENERAL_WITHHOLDING：代扣产品； <a target=\"_blank\" href=\"https://opensupport.alipay.com/support/codelab/detail/712/1471\">PRE_AUTH_ONLINE</a>：支付宝预授权产品； PRE_AUTH：新当面资金授权产品； 默认值为FACE_TO_FACE_PAYMENT。 注意：非当面付产品使用本接口时，本参数必填。请传入对应产品码。").optional(),
  "promo_params": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `promo_params` to the tool, first call the tool `expandSchema` with \"/properties/promo_params\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "query_options": z.array(z.string()).describe("返回参数选项。\t商户通过传递该参数来定制同步需要额外返回的信息字段，数组格式。包括但不限于：[\"fund_bill_list\",\"voucher_detail_list\",\"enterprise_pay_info\",\"discount_goods_detail\",\"discount_amount\",\"mdiscount_amount\"]").optional(),
  "request_org_pid": z.string().describe("收单机构(例如银行）的标识，填写该机构在支付宝的pid。只在机构间联场景下传递该值。").optional(),
  "royalty_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `royalty_info` to the tool, first call the tool `expandSchema` with \"/properties/royalty_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "scene": z.string().describe("支付场景。枚举值：\tbar_code：当面付条码支付场景；\tsecurity_code：当面付刷脸支付场景，对应的auth_code为fp开头的刷脸标识串；\t周期扣款或代扣场景无需传入，协议号通过agreement_params参数传递； \t支付宝预授权和新当面资金授权场景无需传入，授权订单号通过 auth_no字段传入。\t默认值为bar_code。").optional(),
  "seller_id": z.string().describe("卖家支付宝用户ID。\t当需要指定收款账号时，通过该参数传入，如果该值为空，则默认为商户签约账号对应的支付宝用户ID。\t收款账号优先级规则：门店绑定的收款账户>请求传入的seller_id>商户签约账号对应的支付宝用户ID；\t注：直付通和机构间联场景下seller_id无需传入或者保持跟pid一致；\t如果传入的seller_id与pid不一致，需要联系支付宝小二配置收款关系；\t支付宝预授权和新当面资金授权场景下必填。").optional(),
  "settle_currency": z.string().describe("商户指定的结算币种，支持英镑：GBP、港币：HKD、美元：USD、新加坡元：SGD、日元：JPY、加拿大元：CAD、澳元：AUD、欧元：EUR、新西兰元：NZD、韩元：KRW、泰铢：THB、瑞士法郎：CHF、瑞典克朗：SEK、丹麦克朗：DKK、挪威克朗：NOK、马来西亚林吉特：MYR、印尼卢比：IDR、菲律宾比索：PHP、毛里求斯卢比：MUR、以色列新谢克尔：ILS、斯里兰卡卢比：LKR、俄罗斯卢布：RUB、阿联酋迪拉姆：AED、捷克克朗：CZK、南非兰特：ZAR、人民币：CNY").optional(),
  "settle_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `settle_info` to the tool, first call the tool `expandSchema` with \"/properties/settle_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "store_id": z.string().describe("商户门店编号。\t指商户创建门店时输入的门店编号。").optional(),
  "sub_merchant": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `sub_merchant` to the tool, first call the tool `expandSchema` with \"/properties/sub_merchant\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "subject": z.string().describe("订单标题。\t注意：不可使用特殊字符，如 /，=，& 等。").optional(),
  "terminal_id": z.string().describe("商户机具终端编号。").optional(),
  "terminal_params": z.string().describe("IOT设备信息。\t通过集成IOTSDK的机具发起的交易时传入，取值为IOTSDK生成的业务签名值。").optional(),
  "time_expire": z.string().describe("订单绝对超时时间。\t格式为yyyy-MM-dd HH:mm:ss。超时时间范围：1m~15d。\t注：time_expire和timeout_express两者只需传入一个或者都不传，如果两者都传，优先使用time_expire。").optional(),
  "timeout_express": z.string().describe("订单相对超时时间。从交易创建时间开始计算。\t\t该笔订单允许的最晚付款时间，逾期将关闭交易。取值范围：1m～15d。m-分钟，h-小时，d-天，1c-当天（1c-当天的情况下，无论交易何时创建，都在0点关闭）。 该参数数值不接受小数点， 如 1.5h，可转换为 90m。\t\t当面付场景默认值为3h；\t\t其它场景默认值为15d;").optional(),
  "total_amount": z.string().describe("订单总金额。\t单位为元，精确到小数点后两位，取值范围：[0.01,100000000] 。").optional(),
  "trans_currency": z.string().describe("标价币种,  total_amount 对应的币种单位。支持英镑：GBP、港币：HKD、美元：USD、新加坡元：SGD、日元：JPY、加拿大元：CAD、澳元：AUD、欧元：EUR、新西兰元：NZD、韩元：KRW、泰铢：THB、瑞士法郎：CHF、瑞典克朗：SEK、丹麦克朗：DKK、挪威克朗：NOK、马来西亚林吉特：MYR、印尼卢比：IDR、菲律宾比索：PHP、毛里求斯卢比：MUR、以色列新谢克尔：ILS、斯里兰卡卢比：LKR、俄罗斯卢布：RUB、阿联酋迪拉姆：AED、捷克克朗：CZK、南非兰特：ZAR、人民币：CNY").optional(),
  "undiscountable_amount": z.string().describe("不可打折金额。\t不参与优惠计算的金额，单位为元，精确到小数点后两位，取值范围[0.01,100000000]。 \t如果同时传入了【可打折金额】、【不可打折金额】和【订单总金额】，则必须满足如下条件：【订单总金额】=【可打折金额】+【不可打折金额】。\t如果订单金额全部参与优惠计算，则【可打折金额】和【不可打折金额】都无需传入。").optional()
}