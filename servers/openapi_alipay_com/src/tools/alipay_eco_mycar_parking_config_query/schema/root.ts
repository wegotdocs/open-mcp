import { z } from "zod"

export const inputParams = {
  "interface_name": z.string().describe("接口名称。H5传入参数固定值：alipay.eco.mycar.parking.userpage.query；\t小程序传入参数固定值：alipay.eco.mycar.parking.isv.homepage；\t协议状态变更通知传入参数固定值： alipay.eco.mycar.parking.agreement.notify。").optional(),
  "interface_type": z.string().describe("接口类型。H5、小程序传入参数固定值：interface_page；\t通知接口传入参数固定值：interface_service。").optional()
}