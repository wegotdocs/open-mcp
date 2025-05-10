import { z } from "zod"

export const inputParams = {
  "amount": z.string().describe("需要冻结的金额，单位为：元（人民币），精确到小数点后两位。\t取值范围：[0.01,100000000.00]").optional(),
  "business_params": z.string().describe("业务参数，如风控参数outRiskInfo等。").optional(),
  "deposit_product_mode": z.string().describe("免押受理台模式，使用免押产品必传该字段。根据免押不同业务模式将开通受理台区分三种模式，商家可根据调用预授权冻结接口传入的参数决定该笔免押订单选择哪种受理台模式。不同受理台模式需要传入不同参数，其中：POSTPAY 表示后付金额已知，POSTPAY_UNCERTAIN 表示后付金额未知，DEPOSIT_ONLY 表示纯免押。\t具体规则参考文档：<a href=\"https://opendocs.alipay.com/b/08tf3t?pathHash=d67d7545\">https://opendocs.alipay.com/b/08tf3t?pathHash=d67d7545</a>").optional(),
  "disable_pay_channels": z.string().describe("无特殊需要请勿传入；商户可用该参数禁用支付渠道。\t传入后用户不可使用列表中的渠道进行支付，目前支持两种禁用渠道：信用卡快捷（OPTIMIZED_MOTO）、信用卡卡通（BIGAMOUNT_CREDIT_CARTOON）。与可用支付渠道不能同时传入").optional(),
  "enable_pay_channels": z.string().describe("无特殊需要请勿传入；商户可用该参数指定支付渠道。\t传入后用户仅能使用列表中的渠道进行支付，目前支持三种渠道，余额宝（MONEY_FUND）、花呗（PCREDIT_PAY）以及芝麻信用（CREDITZHIMA）。与禁用支付渠道不可同时传入").optional(),
  "extra_param": z.string().describe("业务扩展参数，用于特定业务信息的传递，json格式。 1、category，信用类目，信用预授权场景必传，具体类目信息见<a href=\"https://opendocs.alipay.com/open/10719\">https://opendocs.alipay.com/open/10719</a>； 2、serviceId，信用服务ID：信用预授权场景必传。需要商家在 <a href=\"https://b.alipay.com/page/zmgaia/pre-auth/index\">开放平台-芝麻免押-信用服务管理</a> 创建信用服务获取，详情可查看 <a href=\"https://opendocs.alipay.com/open/03w0a7?pathHash=51f6b4f2&ref=api#%E7%94%B3%E8%AF%B7%E4%BF%A1%E7%94%A8%E6%9C%8D%E5%8A%A1\">创建信用服务</a>。在创建过程中如果有其它疑问，可以咨询芝麻客服小二（0571-88158055 转 2）； 3、creditExtInfo，信用参数，可选，如有需要请与芝麻约定后传入，信用服务说明见<a href=\"https://opendocs.alipay.com/open/11157/qlsxya\">https://opendocs.alipay.com/open/11157/qlsxya</a>").optional(),
  "identity_params": z.string().describe("无特殊需要请勿传入；买家实名信息。\t传入后支付宝会比对买家在支付宝端的实名信息。包含两个可选key：\t1.identity_hash，买家姓名拼接身份证号后，使用SHA256摘要方式与UTF8编码后的hash值，返回的十六进制字符串，例如 “张三4566498798498498498498”对应的identity_hash应为“acc2b92ffc5ed9b472faa19748f10045c30434132784f774b00216a56b8841c6”\t2.alipay_open_id，买家支付宝openId\t3.alipay_user_id，买家支付宝uid").optional(),
  "notify_url": z.string().describe("通知地址").optional(),
  "order_title": z.string().describe("订单标题。\t业务订单的简单描述，如商品名称等").optional(),
  "out_order_no": z.string().describe("商户授权资金订单号。\t商家自定义需保证在商户端不重复。仅支持字母、数字、下划线。").optional(),
  "out_request_no": z.string().describe("商户本次资金操作的请求流水号，用于标示请求流水的唯一性。\t可与out_order_no相同，仅支持字母、数字、下划线。").optional(),
  "pay_timeout": z.string().describe("预授权订单相对超时时间，从商户请求时间开始计算。\t预授权订单允许的最晚授权时间，逾期将关闭该笔订单。取值范围：1m～15d。m-分钟，h-小时，d-天。 该参数数值不接受小数点， 如 1.5h，可转换为90m。\t默认为15m。").optional(),
  "payee_logon_id": z.string().describe("收款账户的支付宝登录号（email或手机号）。\t如果传入则会校验该登录号对应的账号是否具备当前商户收款权限，如果商户希望用户能够使用花呗，则用户号(payee_user_id)和登录号(payee_logon_id)两者必须传入其一，二者无需同时传入").optional(),
  "payee_user_id": z.string().describe("收款账户的支付宝用户号。\t以2088开头的16位纯数字，如果传入则会校验该账号是否具备当前商户收款权限，如果商户希望用户能够使用花呗，则用户号(payee_user_id)和登录号(payee_logon_id)两者必须传入其一，二者无需同时传入").optional(),
  "post_payments": z.array(z.object({ "amount": z.string().describe("后付费金额，单位为：元（人民币），精确到小数点后两位。").optional(), "description": z.string().describe("计费说明").optional(), "name": z.string().describe("后付费项目名称").optional() })).describe("后付费项目，有付费项目时需要传入该字段。不同受理台模式需要传入不同参数，后付费项目名称和计费说明需要通过校验规则，同时计费说明将展示在开通受理台上。当受理台模式（deposit_product_mode）传入POSTPAY 时，后付费项目名称（name）、金额（amount）必传，计费说明（description）选传；当传入 POSTPAY_UNCERTAIN 时，后付费项目名称（name）、计费说明（description）必传，金额（amount）不传。\t具体规则参考文档：<a href=\"https://opendocs.alipay.com/b/08tf3t?pathHash=d67d7545\">https://opendocs.alipay.com/b/08tf3t?pathHash=d67d7545</a>").optional(),
  "product_code": z.string().describe("销售产品码。\t当面资金预授权固定为 PRE_AUTH").optional(),
  "settle_currency": z.string().describe("商户指定的结算币种。支持澳元：AUD, 新西兰元：NZD, 台币：TWD, 美元：USD, 欧元：EUR, 英镑：GBP").optional(),
  "timeout_express": z.string().describe("预授权订单相对超时时间，从商户请求时间开始计算。\t预授权订单允许的最晚授权时间，逾期将关闭该笔订单。取值范围：1m～15d。m-分钟，h-小时，d-天。 该参数数值不接受小数点， 如 1.5h，可转换为90m。\t默认为15m。").optional(),
  "trans_currency": z.string().describe("标价币种,  amount 对应的币种单位。支持澳元：AUD, 新西兰元：NZD, 台币：TWD, 美元：USD, 欧元：EUR, 英镑：GBP").optional()
}