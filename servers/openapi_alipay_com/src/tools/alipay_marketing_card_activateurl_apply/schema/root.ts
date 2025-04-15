import { z } from "zod"

export const inputParams = {
  "callback": z.string().describe("会员卡开卡表单提交后回调地址。要求必须是单纯的服务端接收回调。\t说明：\t1.该地址不可带参数，如需回传参数，可设置out_string入参。").optional(),
  "follow_app_id": z.string().describe("需要关注的生活号AppId。若需要在领卡页面展示“关注生活号”提示，需开通生活号并绑定会员卡。生活号快速接入详见：https://doc.open.alipay.com/docs/doc.htm?treeId=193&articleId=105933&docType=1").optional(),
  "out_string": z.string().describe("该值为商家拉起开卡组件的传递的 out_string  值。通常可用于区分不同业务场景，禁止将该字段作为开卡流程的必要字段，否则会导致会员推广场景下的入会失败").optional(),
  "template_id": z.string().describe("会员卡模板id。使用会员卡模板创建接口(alipay.marketing.card.template.create)返回的结果").optional()
}