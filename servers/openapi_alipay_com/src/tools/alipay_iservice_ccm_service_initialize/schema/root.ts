import { z } from "zod"

export const inputParams = {
  "description": z.string().describe("服务描述").optional(),
  "icon": z.string().describe("服务图标url。支持 http(s) 链接。").optional(),
  "service_code": z.string().describe("服务编码。可在服务上架后，在服务市场上查询此信息。").optional(),
  "service_name": z.string().describe("服务名称。可在服务上架后，在服务市场上查询此信息。").optional(),
  "service_order_url": z.string().describe("服务订购二维码链接").optional(),
  "spis": z.array(z.object({ "biz_code": z.string().describe("ISV自定义的标识功能的业务代码，不可重复").optional(), "description": z.string().describe("spi功能描述").optional(), "icon": z.string().describe("功能图标文件url").optional(), "spi_endpoint": z.string().describe("spi接口服务地址").optional(), "spi_ext_property": z.string().describe("spi接口扩展参数，json格式字符串").optional(), "spi_key": z.string().describe("CCM预先定义的spi key，与插件位置有关").optional(), "spi_name": z.string().describe("SPI 名称").optional() })).describe("spi定义列表").optional()
}