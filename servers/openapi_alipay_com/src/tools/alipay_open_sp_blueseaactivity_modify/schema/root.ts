import { z } from "zod"

export const inputParams = {
  "address": z.string().describe("详细地址").optional(),
  "business_lic": z.string().describe("营业执照，要求证件文本信息清晰可见。 请上传照片的image_id，传参明细请参见<a href=\"https://opendocs.alipay.com/open/01hd83\">报名资质要求</a>").optional(),
  "city_code": z.string().describe("城市编码。请按照https://gw.alipayobjects.com/os/basement_prod/253c4dcb-b8a4-4a1e-8be2-79e191a9b6db.xlsx 表格中内容填写。 （参考资料： http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/）").optional(),
  "district_code": z.string().describe("区县编码。请按照https://gw.alipayobjects.com/os/basement_prod/253c4dcb-b8a4-4a1e-8be2-79e191a9b6db.xlsx 表格中内容填写。 （参考资料： http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/）").optional(),
  "food_business_lic": z.string().describe("食品经营许可证，要求证件文本信息清晰可见。请上传照片的image_id，传参明细请参见<a href=\"https://opendocs.alipay.com/open/01hd83\">报名资质要求</a>").optional(),
  "food_circulate_lic": z.string().describe("食品流通许可证，要求证件文本信息清晰可见。请上传照片的image_id，传参明细请参见<a href=\"https://opendocs.alipay.com/open/01hd83\">报名资质要求</a>").optional(),
  "food_health_lic": z.string().describe("食品卫生许可证，要求证件文本信息清晰可见。请上传照片的image_id，传参明细请参见<a href=\"https://opendocs.alipay.com/open/01hd83\">报名资质要求</a>").optional(),
  "food_production_lic": z.string().describe("食品生产许可证，要求证件文本信息清晰可见。请上传照片的image_id，传参明细请参见<a href=\"https://opendocs.alipay.com/open/01hd83\">报名资质要求</a>").optional(),
  "food_service_lic": z.string().describe("餐饮服务许可证，要求证件文本信息清晰可见。请上传照片的image_id，传参明细请参见<a href=\"https://opendocs.alipay.com/open/01hd83\">报名资质要求</a>").optional(),
  "indoor_pic": z.string().describe("门头照，要求内景照片清晰可见。请上传照片的image_id，传参明细请参见<a href=\"https://opendocs.alipay.com/open/01hd83\">报名资质要求</a>").optional(),
  "order_id": z.string().describe("申请单 id。通过 <a href=\"https://opendocs.alipay.com/apis/01ebig\">alipay.open.sp.blueseaactivity.create</a>接口获取。").optional(),
  "province_code": z.string().describe("省份编码。请按照https://gw.alipayobjects.com/os/basement_prod/253c4dcb-b8a4-4a1e-8be2-79e191a9b6db.xlsx 表格中内容填写。 （参考资料： http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/）").optional(),
  "shop_entrance_pic": z.string().describe("门头照，要求店铺外观照片清晰可见。请上传照片的image_id，传参明细请参见<a href=\"https://opendocs.alipay.com/open/01hd83\">报名资质要求</a>").optional(),
  "tobacco_lic": z.string().describe("烟草专卖零售许可证，要求证件文本信息清晰可见。请上传照片的image_id，传参明细请参见<a href=\"https://opendocs.alipay.com/open/01hd83\">报名资质要求</a>").optional()
}