import { z } from "zod"

export const inputParams = {
  "category_id": z.string().describe("行业类目id,获取请参考<a href=\"https://opendocs.alipay.com/mini/03ci0w?pathHash=ed3c875c\">各个行业场景服务接入资料</a>").optional(),
  "out_biz_no": z.string().describe("外部业务编号,平台会基于appId+out_biz_no做幂等控制，如果出现幂等，会返回幂等的service_code").optional(),
  "schema_version": z.string().describe("服务schema版本").optional(),
  "service_code": z.string().describe("服务编码, 首次提报时设置空值，支付宝侧返回ServiceCode；当传入serviceCode，则对已提报服务做编辑操作。").optional(),
  "service_xml": z.string().describe("服务xml,格式请参考<a href=\"https://opendocs.alipay.com/mini/03cj40?pathHash=a5de4bd9\">Schema 规则介绍</a>").optional(),
  "template_type": z.string().describe("默认值:DEFAULT。").optional(),
  "user_service_delivery_type": z.string().describe("商户提报服务履约类型").optional()
}