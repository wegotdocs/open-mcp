import { z } from "zod"

export const inputParams = {
  "app_origin": z.string().describe("业务来源").optional(),
  "merchandise_id": z.string().describe("订购的服务商品ID").optional(),
  "mini_app_id": z.string().describe("一二方支持传入appId").optional(),
  "request_id": z.string().describe("业务幂等号，规则为商品id+appOrigin+requestId 作为幂等流水号\t非必填,不传则默认生成一个8位requestId").optional()
}