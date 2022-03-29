import CLRequest from "../index"
import { IAccount, IDataType, ILoginResult } from "./types"

enum LoginApi {
  AccountLogin = "/login",
  LoginUserInfo = "/user/",
  AdminMenu = "/adminmenu",
  Menu = "/menu"
}

export function accountLoginRequest(account: IAccount) {
  return CLRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: string) {
  return CLRequest.get<IDataType<ILoginResult>>({
    url: LoginApi.LoginUserInfo + id
  })
}

export function requestUserMenu(roleId: number) {
  if (roleId === 1) {
    return CLRequest.get<IDataType<ILoginResult>>({
      url: LoginApi.AdminMenu
    })
  } else if (roleId === 2) {
    return CLRequest.get<IDataType<ILoginResult>>({
      url: LoginApi.Menu
    })
  }
}
