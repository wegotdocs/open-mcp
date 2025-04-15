import { z } from "zod"

export const inputParams = {
  "address": z.string().describe("地址。商户详细经营地址或人员所在地点").optional(),
  "city_code": z.string().describe("城市编码。\t蚂蚁店铺请按照<a href=\"https://mdn.alipayobjects.com/huamei_sm7gq8/afts/file/A*blT9RqSR9_gAAAAAAAAAAAAADuKQAQ/2022%E8%9A%82%E8%9A%81%E9%87%91%E6%9C%8D%E5%9C%B0%E5%8C%BA%E7%A0%81.xlsx\" target=\"_blank\">蚂蚁店铺地区码</a> 表格中填写。\t直付通商户请按照<a href=\"https://gw.alipayobjects.com/os/basement_prod/253c4dcb-b8a4-4a1e-8be2-79e191a9b6db.xlsx \" target=\"_blank\">直付通商户地区码</a> 表格中内容填写。").optional(),
  "district_code": z.string().describe("区县编码。\t蚂蚁店铺请按照<a href=\"https://mdn.alipayobjects.com/huamei_sm7gq8/afts/file/A*blT9RqSR9_gAAAAAAAAAAAAADuKQAQ/2022%E8%9A%82%E8%9A%81%E9%87%91%E6%9C%8D%E5%9C%B0%E5%8C%BA%E7%A0%81.xlsx\" target=\"_blank\">蚂蚁店铺地区码</a> 表格中填写。\t直付通商户请按照<a href=\"https://gw.alipayobjects.com/os/basement_prod/253c4dcb-b8a4-4a1e-8be2-79e191a9b6db.xlsx \" target=\"_blank\">直付通商户地区码</a> 表格中内容填写。").optional(),
  "latitude": z.string().describe("纬度，浮点型,小数点后最多保留6位\t\t如需要录入经纬度，请以高德坐标系为准，录入时请确保经纬度参数准确。<a href=\"http://lbs.amap.com/console/show/picker\">高德经纬度查询</a>").optional(),
  "longitude": z.string().describe("经度，浮点型, 小数点后最多保留6位。\t\t如需要录入经纬度，请以高德坐标系为准，录入时请确保经纬度参数准确。<a href=\"http://lbs.amap.com/console/show/picker\">高德经纬度查询</a>").optional(),
  "poiid": z.string().describe("高德poiid").optional(),
  "province_code": z.string().describe("省份编码。\t蚂蚁店铺请按照<a href=\"https://mdn.alipayobjects.com/huamei_sm7gq8/afts/file/A*blT9RqSR9_gAAAAAAAAAAAAADuKQAQ/2022%E8%9A%82%E8%9A%81%E9%87%91%E6%9C%8D%E5%9C%B0%E5%8C%BA%E7%A0%81.xlsx\" target=\"_blank\">蚂蚁店铺地区码</a> 表格中填写。\t直付通商户请按照<a href=\"https://gw.alipayobjects.com/os/basement_prod/253c4dcb-b8a4-4a1e-8be2-79e191a9b6db.xlsx \" target=\"_blank\">直付通商户地区码</a> 表格中内容填写。").optional(),
  "type": z.string().describe("地址类型。取值范围：BUSINESS_ADDRESS：经营地址（默认）").optional()
}