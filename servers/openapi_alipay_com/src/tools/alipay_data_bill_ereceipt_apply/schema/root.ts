import { z } from "zod"

export const inputParams = {
  "bill_user_id": z.string().describe("授权商户pid。需调用方获取商户授权，才可使用。").optional(),
  "key": z.string().describe("根据不同业务类型，传入不同参数。\t格式如下：\t* ACCOUNT_LOG_DETAIL - 传入账务流水号，示例：117007*********9151\t* ACCOUNT_FLOW_DETAIL - 传入流水日期区间示例：20220301-20220331\t* FUND_DETAIL - 传入资金单据号，示例：2022051511007***************0731\t* ACCOUNT_LOG_SUM_DAILY - 传入日期，示例：2022-01-01\t* ACCOUNT_LOG_SUM_MONTHLY - 传入月份，示例：2022-01").optional(),
  "type": z.string().describe("申请的类型。可传入：\t* ACCOUNT_LOG_DETAIL - 余额收支证明\t* ACCOUNT_FLOW_DETAIL - 余额收支流水证明\t* FUND_DETAIL - 转入转出收支证明\t* ACCOUNT_LOG_SUM_DAILY - 收支汇总证明（日汇总）\t* ACCOUNT_LOG_SUM_MONTHLY - 收支汇总证明（月汇总）").optional()
}