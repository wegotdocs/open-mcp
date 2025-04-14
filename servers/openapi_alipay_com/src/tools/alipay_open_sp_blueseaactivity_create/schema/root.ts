import { z } from "zod"

export const inputParams = {
  "address": z.string().describe("详细地址。\t该资质是否必传请参见<a href='https://opendocs.alipay.com/open/01hd83'>报名资质要求</a>。").optional(),
  "biz_scene": z.string().describe("蓝海活动的场景，支持场景如下：\t* 直连餐饮（BLUE_SEA_FOOD_APPLY）；\t* 直连快消（BLUE_SEA_FMCG_APPLY）；\t* 间连餐饮（BLUE_SEA_FOOD_INDIRECT_APPLY）；\t* 间连快消（BLUE_SEA_FMCG_INDIRECT_APPLY）。").optional(),
  "business_lic": z.string().describe("营业执照，要求证件文本信息清晰可见，图片文件大小在 50K-5M 之间，不限制长宽，支持 png、bmp、gif、jpg、jpeg 格式。\t请传入<a href='https://opendocs.alipay.com/apis/01ea4t'>alipay.open.sp.image.upload</a>(图片上传接口) 返回的 image_id。\t该资质是否必传请参见<a href='https://opendocs.alipay.com/open/01hd83'>报名资质要求</a>。").optional(),
  "city_code": z.string().describe("城市编码。请按照<a href='https://gw.alipayobjects.com/os/basement_prod/253c4dcb-b8a4-4a1e-8be2-79e191a9b6db.xlsx'>表格</a> 中内容填写。 （请参考资料：<a href='http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/'> 统计用区划和城乡划分代码</a>）").optional(),
  "district_code": z.string().describe("区县编码。请按照<a href='https://gw.alipayobjects.com/os/basement_prod/253c4dcb-b8a4-4a1e-8be2-79e191a9b6db.xlsx'>表格</a> 中内容填写。 （请参考资料：<a href='http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/'> 统计用区划和城乡划分代码</a>）").optional(),
  "food_business_lic": z.string().describe("食品经营许可证，要求证件文本信息清晰可见，图片文件大小在 50K-5M 之间，不限制长宽，支持 png、bmp、gif、jpg、jpeg 格式。\t请传入<a href='https://opendocs.alipay.com/apis/01ea4t'>alipay.open.sp.image.upload</a>(图片上传接口) 返回的 image_id。\t该资质是否必传请参见<a href='https://opendocs.alipay.com/open/01hd83'>报名资质要求</a>。").optional(),
  "food_circulate_lic": z.string().describe("食品流通许可证，要求证件文本信息清晰可见，图片文件大小在 50K-5M 之间，不限制长宽，支持 png、bmp、gif、jpg、jpeg 格式。\t请传入<a href='https://opendocs.alipay.com/apis/01ea4t'>alipay.open.sp.image.upload</a>(图片上传接口) 返回的 image_id。\t该资质是否必传请参见<a href='https://opendocs.alipay.com/open/01hd83'>报名资质要求</a>。").optional(),
  "food_health_lic": z.string().describe("食品卫生许可证，要求证件文本信息清晰可见，图片文件大小在 50K-5M 之间，不限制长宽，支持 png、bmp、gif、jpg、jpeg 格式。\t请传入<a href='https://opendocs.alipay.com/apis/01ea4t'>alipay.open.sp.image.upload</a>(图片上传接口) 返回的 image_id。 \t该资质是否必传请参见<a href='https://opendocs.alipay.com/open/01hd83'>报名资质要求</a>。").optional(),
  "food_production_lic": z.string().describe("食品生产许可证，要求证件文本信息清晰可见，图片文件大小在 50K-5M 之间，不限制长宽，支持 png、bmp、gif、jpg、jpeg 格式。\t请传入<a href='https://opendocs.alipay.com/apis/01ea4t'>alipay.open.sp.image.upload</a>(图片上传接口) 返回的 image_id。\t该资质是否必传请参见<a href='https://opendocs.alipay.com/open/01hd83'>报名资质要求</a>。").optional(),
  "food_service_lic": z.string().describe("餐饮服务许可证，要求证件文本信息清晰可见，图片文件大小在 50K-5M 之间，不限制长宽，支持 png、bmp、gif、jpg、jpeg 格式。\t请传入<a href='https://opendocs.alipay.com/apis/01ea4t'>alipay.open.sp.image.upload</a>(图片上传接口) 返回的 image_id。\t该资质是否必传请参见<a href='https://opendocs.alipay.com/open/01hd83'>报名资质要求</a>。").optional(),
  "indoor_pic": z.string().describe("内景照，要求图片清晰可见，图片文件大小在 50K-5M 之间，不限制长宽，支持 png、bmp、gif、jpg、jpeg 格式。\t请传入<a href='https://opendocs.alipay.com/apis/01ea4t'>alipay.open.sp.image.upload</a>(图片上传接口) 返回的 image_id。\t该资质是否必传请参见<a href='https://opendocs.alipay.com/open/01hd83'>报名资质要求</a>。").optional(),
  "merchant_logon": z.string().describe("参与蓝海活动的商户支付宝账号，只有当参与直连蓝海活动场景（BLUE_SEA_FOOD_APPLY/BLUE_SEA_FMCG_APPLY）时必填，间连场景可空。").optional(),
  "province_code": z.string().describe("省份编码。请按照<a href='https://gw.alipayobjects.com/os/basement_prod/253c4dcb-b8a4-4a1e-8be2-79e191a9b6db.xlsx'>表格</a> 中内容填写。 （请参考资料：<a href='http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/'>  统计用区划和城乡划分代码</a>）").optional(),
  "shop_entrance_pic": z.string().describe("门头照，要求图片清晰可见，图片文件大小在 50K-5M 之间，不限制长宽，支持 png、bmp、gif、jpg、jpeg 格式。\t请传入<a href='https://opendocs.alipay.com/apis/01ea4t'>alipay.open.sp.image.upload</a>(图片上传接口) 返回的 image_id。\t该资质是否必传请参见<a href='https://opendocs.alipay.com/open/01hd83'>报名资质要求</a>。").optional(),
  "sub_merchant_id": z.string().describe("参与蓝海活动的间连商户账号，只有当参与间连蓝海活动场景（BLUE_SEA_FOOD_INDIRECT_APPLY/BLUE_SEA_FMCG_INDIRECT_APPLY）时必填，直连场景可空。").optional(),
  "tobacco_lic": z.string().describe("烟草专卖零售许可证，要求证件文本信息清晰可见，图片文件大小在 50K-5M 之间，不限制长宽，支持 png、bmp、gif、jpg、jpeg 格式。\t请传入<a href='https://opendocs.alipay.com/apis/01ea4t'>alipay.open.sp.image.upload</a>(图片上传接口) 返回的 image_id。 \t该资质是否必传请参见<a href='https://opendocs.alipay.com/open/01hd83'>报名资质要求</a>。").optional()
}