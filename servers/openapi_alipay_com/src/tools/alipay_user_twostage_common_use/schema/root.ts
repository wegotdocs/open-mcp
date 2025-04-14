import { z } from "zod"

export const inputParams = {
  "dynamic_id": z.string().describe("商户扫描用户的付款码值。").optional(),
  "pay_check_strategy": z.string().describe("传1表示 校验pid(pay_pid)和来支付的时候的pid一致性；\t传2表示校验pid(pay_pid)和来支付的时候的pid一致性、校验scene_no和来支付时DYNAMIC_TOKEN_OUT_BIZ_NO属性一致；                       \t不传值和value=2的表现一致").optional(),
  "pay_pid": z.string().describe("商家进行二阶段支付的PID信息。").optional(),
  "sence_no": z.string().describe("外部业务号，用于标识这笔解码请求，对同一个码的重复解码请求，sence_no必须与上一次保持一致，每次请求的sence_no必须不一样，如alipay.user.twostage.common.use接口配合alipay.trade.pay（统一收单交易支付接口）一并使用时，alipay.trade.pay接口的extend_params属性中必须设置DYNAMIC_TOKEN_OUT_BIZ_NO，且值必须与sence_no保持一致。").optional()
}