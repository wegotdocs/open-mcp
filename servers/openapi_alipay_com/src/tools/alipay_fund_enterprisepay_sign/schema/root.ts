import { z } from "zod"

export const inputParams = {
  "account_name": z.string().describe("企业简称，传空采用默认规则命名，使用公司名称").optional(),
  "appoint_sign_terminal": z.string().describe("指定签约终端类型\tPC-电脑浏览器\tMOBILE-手机端").optional(),
  "biz_scene": z.string().describe("业务场景，联系支付宝分配").optional(),
  "ext_params": z.string().describe("特殊场景下扩展字段").optional(),
  "identity": z.string().describe("开户账号：\t当identity_type是ALIPAY_USER_ID时填支付宝会员ID（2088开头）；\t当identity_type是ALIPAY_LOGON_ID 时填支付宝登录号；\t当identity_type是OUT_USER_ID时填外部平台的用户uid;\t当identity_type是ALIPAY_OPEN_ID时填用户openId").optional(),
  "identity_name": z.string().describe("开户用户名称，identity_type为ALIPAY_LOGON_ID时必填").optional(),
  "identity_type": z.string().describe("账号类型，目前支持如下类型：\t1、ALIPAY_USER_ID 支付宝的会员ID\t2、ALIPAY_LOGON_ID：支付宝登录号，支持邮箱和手机号格式\t3、OUT_USER_ID：外部用户uid").optional(),
  "out_biz_no": z.string().describe("商户侧单号（幂等字段）\t，补充说明：幂等逻辑（商户appid+out_biz_no），商户集成时需注意，如换号重复发起，则认为是一笔新的请求").optional(),
  "out_entity_id": z.string().describe("外部实体ID，一般表述为外部操作人操作某个外部实体。比如企业码2284号").optional(),
  "out_source": z.string().describe("ISV平台定义的共同账户开户来源").optional(),
  "product_code": z.string().describe("产品码").optional()
}