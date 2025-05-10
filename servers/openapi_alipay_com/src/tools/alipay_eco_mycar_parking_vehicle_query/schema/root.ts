import { z } from "zod"

export const inputParams = {
  "auth_token": z.string().describe("用户授权令牌").optional(),
  "car_id": z.string().describe("支付宝用户车辆ID，系统唯一。（该参数会在停车平台用户点击查询缴费，跳转到ISV停车缴费查询页面时，从请求中传递）").optional()
}