import { z } from "zod"

export const inputParams = {
  "ip_role_id": z.string().describe("商户角色id，表示将要开的店属于哪个商户角色。对于直连开店场景，填写商户pid；对于间连开店场景（线上、线下、直付通），填写商户smid。特别说明：IoT设备三绑定场景统一填写商户pid").optional(),
  "page_num": z.number().int().describe("查询页数").optional(),
  "page_size": z.number().int().describe("每页查询大小，限制100以内").optional(),
  "address_version": z.string().describe("行政区划版本，当前可传空值(取默认版本)、2022Q2、UPTODATE(取最新版本)，其中空值默认为：2020Q1版本(address_version=''或null)，想要查看版本是2022年2季度版本则传入:(address_version='2022Q2')，想要获取最新版本则传入:(address_version ='UPTODATE')").optional()
}