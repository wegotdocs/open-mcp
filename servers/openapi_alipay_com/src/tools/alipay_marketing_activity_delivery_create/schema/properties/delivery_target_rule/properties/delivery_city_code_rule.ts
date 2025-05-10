import { z } from "zod"

export const inputParams = {
  "all_city": z.boolean().describe("是否全国。只允许填true，否则不填。").optional(),
  "city_codes": z.array(z.string()).describe("城市编码。请按照<a href =\"https://gw.alipayobjects.com/os/basement_prod/253c4dcb-b8a4-4a1e-8be2-79e191a9b6db.xlsx\">https://gw.alipayobjects.com/os/basement_prod/253c4dcb-b8a4-4a1e-8be2-79e191a9b6db.xlsx</a>  表格中内容填写。 （参考资料： <a href =\"http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/\">http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/</a> ）").optional()
}