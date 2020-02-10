export type AuthTemplateProps = {
  children: React.ReactNode
}

export type AuthFormProps = {
  type: string
}

export type SignupState = {
  email      : string
  nickname   : string
  password   : string
  password2  : string
  phoneNumber: string
  introduction: string
  city: string
  town: string
  lcategory: string
  scategory: string
  gender: number
  interestList: Interest[]
  onChange:         (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeTextarea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onChangeSelect:   (e: React.ChangeEvent<HTMLSelectElement>) => void
  [key: string]:
    | string
    | number
    | Interest[]
    | ((e: React.ChangeEvent<HTMLInputElement>) => void)
    | ((e: React.ChangeEvent<HTMLTextAreaElement>) => void)
    | ((e: React.ChangeEvent<HTMLSelectElement>) => void)
}

export type LoginState = {
  email: string
  password: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  [key: string]: string | ((e: React.ChangeEvent<HTMLInputElement>) => void)
}

export type CityAndTowns = {
  [key: string]: string[]
}

export type Interests = {
  [key: string]: string[]
}

export type SocialButtonProps = {
  bColor: string
  color: string
  children: React.ReactNode
  onRemove?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export type Interest = {
  lcategory: string
  scategory: string
}

export type ButtonProps = {
  children  ?  : React.ReactNode
  onClick   ?  : (e: React.MouseEvent<HTMLButtonElement>) => void
}

export type RadioProps = {
  name    : string
  value   : string
  children: React.ReactNode
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type LoginData = {
  email: string
  pw: string
}

export type SignupData = {
  email: string
  nickname: string
  password: string
  password2: string
  phoneNumber: string
  introduction: string
  city: string
  town: string
  lcategory: string
  scategory: string
  gender: number
  interestList: Interest[]
}
