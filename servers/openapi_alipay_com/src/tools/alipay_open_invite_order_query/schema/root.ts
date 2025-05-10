import { z } from "zod"

export const inputParams = {
  "isv_biz_id": z.string().describe("isv业务系统单据编号").optional(),
  "alipay_logon_id": z.string().describe("商家的支付宝账号，如果调用alipay.open.invite.order.create接口时有传入支付宝账号，则这里查询签约状态时必须要传").optional()
}