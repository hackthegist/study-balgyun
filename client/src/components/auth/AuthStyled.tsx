/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import palette from '../../lib/styles/palette'
import { FaComment, FaPlusSquare } from 'react-icons/fa'
import { AiFillFacebook, AiFillMinusSquare } from 'react-icons/ai'
import { ReactComponent as NaverLogo } from '../../assets/naver_icon.svg'
import { SocialButtonProps, ButtonProps, RadioProps } from './AuthTypes'

export const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }

  padding: 2rem 1rem 1rem 1rem;
  width: 380px;
  min-height: 400px;
  background: white;
  border-radius: 2px;
`

export const StyledContainer = styled.div`
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: black;
    margin-bottom: 2rem;
  }
`

export const StyledLabel = styled.label`
  font-size: 0.8em;
  font-weight: bold;
  display: block;
  margin-top: 7px;
  margin-bottom: 2px;
  color: ${palette.violet[7]};
`
export const StyledInput = styled.input<{ width?: number | undefined }>`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.violet[7]};
  margin: 0px 0px 8px 0px;
  padding: 0.4rem 0.5rem 0.2rem 0.5rem;
  outline: none;
  width: ${props => (props.width ? props.width : 98)}%;

  &:focus {
    color: oc-teal-7;
    border-bottom: 1px solid ${palette.violet[7]};
  }
  & + & {
    margin-top: 1rem;
  }
  &::placeholder {
    font-size: 0.88em;
  }
`
export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 20px 0px;
`

export const StyledSelect = styled.select`
  width: 100px;
  text-align: center;
  margin-right: 10px;
  border: none;
`

export const StyledTextarea = styled.textarea`
  display: inline-block;
  /* border-color: ${palette.yellow[4]}; */
  margin: 10px 0px 10px 0px;
  resize: none;

  /* box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.7); */
`

export const SocialButton = ({
  bColor,
  color,
  children,
  onRemove
}: SocialButtonProps) => (
  <button
    css={css`
      color: ${color};
      background: ${bColor};
      font-weight: bold;
      font-size: 0.9em;
      border-radius: 4px;
      /* padding: 6px 0px; */
      width: 100%;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 1rem;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        opacity: 0.7;
        color: black;
      }
    `}
    onClick={onRemove}
  >
    {children}
  </button>
)

export const FbIcon = styled(AiFillFacebook)`
  color: white;
  background-color: #1673ea;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 20px;
`
export const KakaoIcon = styled(FaComment)`
  color: #3c1e1e;
  background-color: #f7e317;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 20px;
  padding: 1px;
`

export const NaverIcon = () => {
  return (
    <NaverLogo
      css={css`
        color: white;
        background-color: #1ec800;
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 25px;
      `}
    />
  )
}

export const StyledButton = styled.button<{
  width?: number | undefined
  marginTop?: number | undefined
  marginLeft?: number | undefined
}>`
  width: ${props => (props.width ? props.width : 100)}%;
  outline: none;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)}px;
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)}%;
  color: white;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  background: ${palette.violet[6]};
  &:hover {
    background: ${palette.violet[4]};
  }
`

export const Guide = styled.span<{ marginTop?: string; color?: string }>`
  display: inline-block;
  color: ${props => props.color};
  margin-top: ${props => props.marginTop};
  font-size: 0.75rem;
  font-weight: bold;
  margin-bottom: 5px;
  margin-right: 3px;
`

export const PlusButton = ({ onClick, ...props }: ButtonProps) => {
  return (
    <button
      css={css`
        border: none;
        background: none;
        width: -webkit-min-content;
        width: -moz-min-content;
        width: min-content;
        margin-top: 5px;
        margin-right: 20px;
      `}
      onClick={onClick}
      {...props}
    >
      <FaPlusSquare
        css={css`
          color: ${palette.violet[7]};
          height: 1.5rem;
          width: 1.5rem;
        `}
      />
    </button>
  )
}

export const DeleteButton = ({ onClick, ...props }: ButtonProps) => (
  <button
    css={css`
      border: none;
      background: none;
      width: -webkit-min-content;
      width: -moz-min-content;
      width: min-content;
      margin-top: 5px;
      margin-right: 20px;
    `}
    onClick={onClick}
    {...props}
  >
    <AiFillMinusSquare
      css={css`
        color: ${palette.violet[7]};
        height: 1.6rem;
        width: 1.6rem;
      `}
    />
  </button>
)

export const StyledRadio = ({
  name,
  value,
  children,
  onChange,
  ...props
}: RadioProps) => (
  <div
    css={css`
      display: flex;
      align-items: center;
    `}
  >
    <input
      type="radio"
      name={name}
      value={value}
      onChange={onChange}
      {...props}
      css={css`
        &:checked {
          color: ${palette.yellow[7]};
        }
      `}
    />
    <span
      css={css`
        font-size: 14px;
      `}
    >
      {children}
    </span>
  </div>
)
