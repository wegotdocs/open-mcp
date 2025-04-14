import { z } from "zod"

export const inputParams = {
  "label_id": z.string().describe("标签 id，只支持生活号自定义标签。通过 <a href=\"https://opendocs.alipay.com/apis/api_6/alipay.open.public.life.label.create\">alipay.open.public.life.label.create</a>(创建标签接口)创建自定义标签后获取。").optional(),
  "matchers": z.array(z.object({ "identity_card": z.string().describe("身份证号码，与user_id、mobile_no不能同时为空").optional(), "mobile_no": z.string().describe("手机号码，与user_id、identity_card不能同时为空").optional(), "open_id": z.string().describe("支付宝用户openid").optional(), "user_id": z.string().describe("支付宝用户id，2088开头16位长度的字符串，与mobile_no、identity_card不能同时为空").optional() })).describe("支付宝用户匹配器列表，最多传入10条").optional()
}