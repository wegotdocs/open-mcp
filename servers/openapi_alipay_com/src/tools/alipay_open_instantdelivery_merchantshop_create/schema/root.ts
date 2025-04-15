import { z } from "zod"

export const inputParams = {
  "contact_name": z.string().describe("联系人姓名").optional(),
  "detail_address": z.string().describe("地址。商户详细经营地址或人员所在地点").optional(),
  "enterprise_city": z.string().describe("城市编码。请按照https://gw.alipayobjects.com/os/basement_prod/253c4dcb-b8a4-4a1e-8be2-79e191a9b6db.xlsx 表格中内容填写。 （参考资料： http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/）").optional(),
  "enterprise_district": z.string().describe("区县编码。请按照https://gw.alipayobjects.com/os/basement_prod/253c4dcb-b8a4-4a1e-8be2-79e191a9b6db.xlsx 表格中内容填写。 （参考资料： http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/）").optional(),
  "enterprise_province": z.string().describe("省份编码。请按照https://gw.alipayobjects.com/os/basement_prod/253c4dcb-b8a4-4a1e-8be2-79e191a9b6db.xlsx 表格中内容填写。 （参考资料： http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/）").optional(),
  "latitude": z.string().describe("纬度，浮点型,小数点后最多保留6位 如需要录入经纬度，请以高德坐标系为准，录入时请确保经纬度参数准确。高德经纬度查询：http://lbs.amap.com/console/show/picker").optional(),
  "longitude": z.string().describe("经度，浮点型, 小数点后最多保留6位。 如需要录入经纬度，请以高德坐标系为准，录入时请确保经纬度参数准确。高德经纬度查询：http://lbs.amap.com/console/show/picker").optional(),
  "out_biz_no": z.string().describe("外部业务号").optional(),
  "phone": z.string().describe("联系人电话/手机号").optional(),
  "poiid": z.string().describe("高德poiid").optional(),
  "shop_category": z.string().describe("店铺类目，取值参见文件https://mif-pub.alipayobjects.com/ShopCategory.xlsx 中的三级门店类目").optional(),
  "shop_name": z.string().describe("门店名称，最长不超过256个字符。名称+地址需要全局唯一。").optional(),
  "shop_no": z.string().describe("商家门店编码，可自定义，但必须唯一").optional()
}