import { z } from "zod"

export const inputParams = {
  "biz_channel": z.string().describe("表示接口查询门店的业务渠道限制：ALL、 POS、不传。不传代表只查询普通门店，传入POS代表只查询简易门店，传入ALL代表查询普通门店和简易门店。").optional(),
  "brand_name": z.string().describe("品牌名").optional(),
  "city_code": z.string().describe("城市编码，国标码，如：120100表示天津市").optional(),
  "district_code": z.string().describe("区域编码，如：120104表示南开区").optional(),
  "op_role": z.string().describe("表示接口业务的调用方身份：ISV、 服务商身份标识。传入ISV代表系统集成商身份。传入PROVIDER代表服务商。").optional(),
  "page_no": z.number().int().describe("页码，留空标示第一页，默认 20个结果为一页").optional(),
  "page_size": z.number().int().describe("每页记录数，默认20，最大 100").optional(),
  "province_code": z.string().describe("省份编码，国标码，如：120000表示天津").optional(),
  "query_type": z.string().describe("门店数据查询类型，根据类型可以返回指定的门店数据，目前支持的类型如下：\r\tBRAND_RELATION ： 品牌商关联店铺\r\tMALL_SELF ：MALL自己的门店\r\tMALL_RELATION：MALL关联下的门店\r\tMERCHANT_SELF:商户自己的门店\r\tKB_PROMOTER：口碑客推广者").optional(),
  "related_partner_id": z.string().describe("query_type查询类型下所关联的商户PID").optional(),
  "shop_id": z.string().describe("门店ID").optional(),
  "shop_status": z.string().describe("门店状态，传入多个状态，多个状态使用英文逗号隔开，例如：PAUSED,OPEN\r\t店铺状态：OPEN（营业）、PAUSED（暂停）、INIT（初始）、FREEZE（冻结）、CLOSED（关店）").optional()
}