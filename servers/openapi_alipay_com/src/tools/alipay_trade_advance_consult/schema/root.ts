import { z } from "zod"

export const inputParams = {
  "alipay_user_id": z.string().describe("支付宝用户 id，2088开头的16为数字。\t除单笔订单风险预评估场景(即consult_scene指定ORDER_RISK_EVALUATION)外，其他场景必选。").optional(),
  "consult_scene": z.string().describe("订单咨询类型，用以选择咨询的服务。不传时默认为垫资咨询，其他的场景需要按照对接的服务传入指定的值。\tORDER_RISK_EVALUATION：表示单笔订单风险预评估。").optional(),
  "industry_product_code": z.string().describe("行业产品信息，咨询时会从该产品对应的销售方案中获取相关垫资规则配置。").optional(),
  "sub_merchant_id": z.string().describe("子商户id").optional(),
  "sub_merchant_type": z.string().describe("子商户类型").optional(),
  "agreement_no": z.string().describe("支付宝系统中用以唯一标识用户签约记录的编号（用户签约成功后的协议号 ） ，在进行单笔订单风险评估预咨询时必传。").optional(),
  "estimated_order_amount": z.string().describe("预估订单总金额，单位为元，精确到小数点后两位，单笔订单风险预评估时使用，取值范围[0.01,100000000]。").optional(),
  "out_trade_no": z.string().describe("商户请求时的外部订单号，在花芝场景下非空。").optional(),
  "need_user_risk_prediction": z.string().describe("是否需要进行用户风险预测").optional(),
  "trade_digest": z.string().describe("交易信息摘要，需要进行用户风险预测时可传，用于结合场景的更加精细的预测。具体信息结构服务接入前咨询约定。").optional(),
  "user_out_binding_phone": z.string().describe("用户在外部域账号系统绑定的手机号，需要进行用户风险预测时必传，用于预测用户是否面临被二次放号的场景。使用时需要对请求加密，加密后请求在公网传输时为加密文本。详见：https://opendocs.alipay.com/open/common/104567；https://opendocs.alipay.com/isv/grefvl/getaes").optional()
}