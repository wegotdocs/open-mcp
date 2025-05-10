import { z } from "zod"

export const inputParams = {
  "pay_express": z.string().describe("邮费标识，属于券的服务，用于用户门槛信息展示").optional()
}