import { z } from "zod"

export const inputParams = {
  "menu_key": z.string().describe("要删除的个性化菜单key。通过 <a href=\"https://opendocs.alipay.com/apis/api_6/alipay.open.public.personalized.menu.create\">alipay.open.public.personalized.menu.create</a>(个性化菜单创建)接口创建个性化菜单后获取。").optional()
}