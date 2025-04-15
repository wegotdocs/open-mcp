import { z } from "zod"

export const inputParams = {
  "amount": z.string().describe("含税总金额 (等于sum_price和tax之和)，\t单位：元，格式为2位小数，精度2位小数").optional(),
  "item_name": z.string().describe("发票项目名称（或商品名称）").optional(),
  "item_no": z.string().describe("发票项目编号（或商品编号）").optional(),
  "price": z.string().describe("单价（不含税），格式为2位小数。最大支持6位小数，不足2位小数时需转化为2位小数格式。\t折扣行此参数不能传").optional(),
  "quantity": z.string().describe("数量，须大于0，最多6位小数。\t折扣行此参数不能传").optional(),
  "row_type": z.number().int().describe("发票行性质。0表示正常行，1表示折扣行，2表示被折扣行。\t比如充电器单价100元，折扣10元，则明细为2行，充电器行性质为2，折扣行性质为1。如果充电器没有折扣，则值应为0。").optional(),
  "specification": z.string().describe("规格型号").optional(),
  "sum_price": z.string().describe("不含税总金额，格式为2位小数\t单位：元，精度2位小数").optional(),
  "tax": z.string().describe("税额，\t格式为2位小数").optional(),
  "tax_rate": z.string().describe("税率。格式为2位小数，如：0.00, 0.03, 0.13等等").optional(),
  "unit": z.string().describe("单位，折扣行不能传").optional(),
  "zero_rate_flag": z.string().describe("0税率标识，只有税率为0的情况才有值，0=出口零税率，1=免税，2=不征收，3=普通零税率").optional()
}