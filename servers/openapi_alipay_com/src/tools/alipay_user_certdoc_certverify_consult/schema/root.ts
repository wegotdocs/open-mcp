import { z } from "zod"

export const inputParams = {
  "auth_token": z.string().describe("用户授权令牌").optional(),
  "verify_id": z.string().describe("信息校验验证ID。通过<a href=\"https://opendocs.alipay.com/apis/api_2/alipay.user.certdoc.certverify.preconsult\">alipay.user.certdoc.certverify.preconsult</a>(实名证件信息比对验证预咨询)接口获取。").optional()
}