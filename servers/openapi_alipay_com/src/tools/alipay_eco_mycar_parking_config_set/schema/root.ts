import { z } from "zod"

export const inputParams = {
  "account_no": z.string().describe("签约支付宝账号").optional(),
  "interface_info_list": z.array(z.object({ "interface_name": z.string().describe("H5传入参数固定值：alipay.eco.mycar.parking.userpage.query;\t\t小程序传入参数固定值：alipay.eco.mycar.parking.isv.homepage;\t\t协议状态变更通知传入参数固定值：\talipay.eco.mycar.parking.agreement.notify;").optional(), "interface_type": z.string().describe("H5、小程序传入参数固定值:interface_page；\t通知接口传入参数固定值:interface_service;").optional(), "interface_url": z.string().describe("H5 SPI接口的调用地址url，协议必须为https，对整个url字符串必须进行UrlEncode编码。编码为UTF-8;\t\t小程序SPI接口的调用地址ur格式：小程序|小程序缴费页面地址;\t\t协议状态变更通知SPI接口的调用地址url，同H5格式;").optional() })).describe("接口信息列表，停车业务需要配置的接口列表，该值为JSON数据格式的LIST对象，现阶段只需要配置一个页面接口即可 。每次请将所有的接口配置信息都传入，未传的接口信息将会被置空。").optional(),
  "merchant_logo": z.string().describe("商户在停车平台首页露出的LOGO。\t注意：\t*该图片为PNG格式，内容为BASE64的字符串，建议图片尺寸27px*27px，大小不要超过60K。\t*若为空则停车平台首页将不露出商户LOGO。").optional(),
  "merchant_name": z.string().describe("商户简称，由开发者提供").optional(),
  "merchant_service_phone": z.string().describe("商户客服电话").optional()
}