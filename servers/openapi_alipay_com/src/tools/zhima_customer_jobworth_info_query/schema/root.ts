import { z } from "zod"

export const inputParams = {
  "user_name": z.string().describe("姓名").optional(),
  "conn_key": z.string().describe("外部订单号，zhima.credit.payafteruse.creditagreement.sign的入参 out_agreement_no智能简历场景支持只传该值").optional(),
  "cert_no": z.string().describe("证件号 ，根据cert_type类型设置对应证件号码，选择身份证校验时必传").optional(),
  "user_id": z.string().describe("蚂蚁统一会员ID ，为2088开头的唯一标识\t选择支付宝uid检验时必传，支付宝uid或身份证+身份证类型 查询2选1，都设置时uid优先").optional(),
  "open_id": z.string().describe("蚂蚁统一会员ID ，为2088开头的唯一标识\t选择支付宝uid检验时必传，支付宝uid或身份证+身份证类型 查询2选1，都设置时uid优先").optional(),
  "back_url": z.string().describe("若用户没有开通工作证或者芝麻，成功开通后回跳的链接 ，支持http或schema地址").optional(),
  "cert_type": z.string().describe("证件类型 ，枚举值：\t0:身份证1:护照2:台湾同胞回乡证3:港澳居民往来内地通行证4:台湾居民通行证5:港澳居民通行证\t选择身份证校验时必传，支付宝uid或身份证+身份证类型 查询2选1，都设置时uid优先").optional(),
  "ka_visitor_id": z.string().describe("商户内部的唯一id如果是需要返回h5页面必填").optional(),
  "visitor_type": z.string().describe("访问类型\tC = company  or P = person\t如果是需要返回h5页面必填").optional(),
  "visitor_name": z.string().describe("商户侧配置访客名称\t如果是需要返回h5页面必填").optional(),
  "company_certificate": z.string().describe("公司社会统一代码h5页面访客展示使用").optional(),
  "visitor_url": z.string().describe("上传图片接口返回的id").optional(),
  "has_button": z.boolean().describe("在h5页面是否展示底部跳转按钮").optional(),
  "has_number": z.boolean().describe("true or false\t是否展示").optional(),
  "has_qr_code": z.boolean().describe("是否展示二维码").optional(),
  "has_html": z.boolean().describe("是否需要返回h5页面").optional(),
  "job_id": z.string().describe("对外使用的jobid").optional(),
  "industry_id": z.string().describe("行业描述ID").optional(),
  "cloud_resume_scene": z.string().describe("子场景").optional()
}