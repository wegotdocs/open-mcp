import { z } from "zod"

export const inputParams = {
  "agreement_id": z.string().describe("芝麻go协议号，唯一标识一个芝麻go协议。").optional(),
  "user_id": z.string().describe("用户 id，用户在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。").optional(),
  "open_id": z.string().describe("用户 id，用户在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。").optional(),
  "provider_pid": z.string().describe("数据回传的商户 ID，即和用户发生业务来往的 PID 主体。商户账号在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。").optional(),
  "need_detail": z.boolean().describe("是否需要回传明细。枚举支持：\t* true：需要回传明细。\t* false：不需要回传明细。").optional(),
  "page_no": z.number().int().describe("分页参数，当need_detail=true时需要，代表当前页数，从1开始。").optional(),
  "page_size": z.number().int().describe("分页参数，当need_detail=true时需要，代表每页大小，不能大于20。").optional()
}