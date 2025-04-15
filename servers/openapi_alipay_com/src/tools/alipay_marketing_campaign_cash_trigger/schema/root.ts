import { z } from "zod"

export const inputParams = {
  "crowd_no": z.string().describe("现金活动号，通过<a href=\"https://opendocs.alipay.com/apis/api_5/alipay.marketing.campaign.cash.create\">alipay.marketing.campaign.cash.create</a>(创建现金活动)接口创建现金活动获取。").optional(),
  "login_id": z.string().describe("用户登录账号名，一般为邮箱或手机号。\t注意：user_id与login_id二选一必填，同时传入时以user_id为准。").optional(),
  "open_id": z.string().describe("open_id").optional(),
  "order_price": z.string().describe("此字段如果传入金额，就忽略prize_type算法，按照传入的金额发奖。如果不传或者小于等于0，则按照活动创建时指定的prize_type为fixed或者random算法发奖").optional(),
  "out_biz_no": z.string().describe("领取红包的外部业务号，只由可由字母、数字、下划线组成。同一个活动中不可重复，相同的外部业务号会被幂等并返回之前的结果。不填时，系统会生成一个默认固定的外部业务号。").optional(),
  "user_id": z.string().describe("用户支付宝唯一标识，2088开头。\t注意：user_id与login_id二选一必填，同时传入时以user_id为准。").optional()
}