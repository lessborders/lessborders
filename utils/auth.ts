export type IToken = string

export function AuthManager() {
  // composable
  const tokenUserSetting = useCookie('token', { path: '/' })

  // methods
  const getUserSetting = () => tokenUserSetting.value

  // state
  const tokenSetting = useState<IToken>('token.setting', () => getUserSetting())

  // wathcers
  const onTokenSettingChange = (tokenSetting: string) => {
    tokenUserSetting.value = tokenSetting
  }
  watch(tokenSetting, (val) => onTokenSettingChange(val))

  // init token
  const init = () => {
    tokenSetting.value = getUserSetting()
  }
  onTokenSettingChange(tokenSetting.value)

  // lifecycle
  onBeforeMount(() => init())

  return {
    tokenSetting,
    getUserSetting,
  }
}
