import { z } from "zod"

export const inputParams = {
  "amount": z.string().describe("本次操作解冻的金额，单位为：元（人民币），精确到小数点后两位。\t取值范围：[0.01,100000000.00]").optional(),
  "auth_no": z.string().describe("支付宝资金授权订单号。").optional(),
  "extra_param": z.string().describe("解冻扩展信息。map<string, string>的json格式，目前支持如下key：\tunfreezeBizInfo：由芝麻消费，当前支持value如下：\t\"bizComplete\":\"true\"——标识本次解冻用户已履约，true表示信用单履约完结").optional(),
  "notify_url": z.string().describe("通知地址").optional(),
  "out_request_no": z.string().describe("解冻请求流水号。\t如果是针对同一笔授权单不同的解冻请求，如第一次解冻1元，第二次解冻2元，则解冻请求流水号必须不重复；\t如果是针对同一笔解冻请求的多次发起，则需要保证每次发起，解冻请求流水号和解冻金额都相同").optional(),
  "remark": z.string().describe("商户对本次解冻操作的附言描述").optional()
}