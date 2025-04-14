import { z } from "zod"

export const inputParams = {
  "product_code": z.string().describe("销售产品码，商家和支付宝签约的产品码，如果传递了out_biz_no则该字段为必传。可传值如下：\tSTD_RED_PACKET：现金红包\tTRANS_ACCOUNT_NO_PWD：单笔无密转账到支付宝账户\tTRANS_BANKCARD_NO_PWD：单笔无密转账到银行卡").optional(),
  "biz_scene": z.string().describe("描述特定的业务场景，如果传递了out_biz_no则该字段为必传。可取的业务场景如下：\r\tPERSONAL_PAY：C2C现金红包-发红包；\r\tPERSONAL_COLLECTION：C2C现金红包-领红包；\r\tREFUND：C2C现金红包-红包退回；\r\tDIRECT_TRANSFER：B2C现金红包、单笔无密转账").optional(),
  "out_biz_no": z.string().describe("商户转账唯一订单号，发起转账来源方定义的转账单据ID。 \t本参数和order_id（支付宝转账单据号）、pay_fund_order_id（支付宝支付资金流水号）三者不能同时为空。\t当三者同时传入时，将用pay_fund_order_id（支付宝支付资金流水号）进行查询，忽略其余两者；\t当本参数和支付宝转账单据号同时提供时，将用支付宝转账单据号进行查询，忽略本参数。").optional(),
  "order_id": z.string().describe("支付宝转账单据号。 本参数和out_biz_no（商户转账唯一订单号）、pay_fund_order_id（支付宝支付资金流水号）三者不能同时为空。 \t当三者同时传入时，将用pay_fund_order_id（支付宝支付资金流水号）进行查询，忽略其余两者；\t当本参数和pay_fund_order_id（支付宝支付资金流水号）同时提供时，将用支付宝支付资金流水号进行查询，忽略本参数； \t当本参数和out_biz_no（商户转账唯一订单号）同时提供时，将用本参数进行查询，忽略商户转账唯一订单号。").optional(),
  "pay_fund_order_id": z.string().describe("支付宝支付资金流水号。本参数和支付宝转账单据号、商户转账唯一订单号三者不能同时为空。 \t当本参数和out_biz_no（商户转账唯一订单号）、order_id（支付宝转账单据号）同时提供时，将用本参数进行查询，忽略其余两者；\t当本参数和order_id（支付宝转账单据号）同时提供时，将用本参数进行查询，忽略支付宝转账单据号； \t当本参数和out_biz_no（商户转账唯一订单号）同时提供时，将用本参数进行查询，忽略商户转账唯一订单号。").optional()
}