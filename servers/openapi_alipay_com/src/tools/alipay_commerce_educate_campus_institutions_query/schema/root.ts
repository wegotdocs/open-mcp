import { z } from "zod"

export const inputParams = {
  "inst_name": z.string().describe("学校名称").optional(),
  "province_code": z.string().describe("省份编码，编码标准为中华人民共和国行政区划代码，参见 2020年12月中华人民共和国县以上行政区划代码。").optional(),
  "city_code": z.string().describe("城市编码，编码标准为中华人民共和国行政区划代码，参见 2020年12月中华人民共和国县以上行政区划代码。").optional(),
  "inst_id": z.string().describe("学校内标：支付宝内部学校唯一编号。使用内标查询时，默认使用内标进行精确匹配。").optional(),
  "inst_std_code": z.string().describe("学校外标：统一社会信用编码或教育部提供的学校标识码。使用学校外标查询时，默认使用外标进行精确匹配。").optional(),
  "like_property": z.string().describe("是否使用学校名称模糊匹配进行查询，默认精确匹配。\t枚举值如下：\t1：精确匹配；\t0：模糊匹配").optional()
}