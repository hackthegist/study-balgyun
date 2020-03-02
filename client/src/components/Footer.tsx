/**@jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

const WrapperDiv = styled.div`
  background: #24282b;
  width: 100%;
  color: #aaaaaa;
  padding: 20px;
  text-align: center;
`
const StressedSpan = styled.span`
  color: #d0bfff;
  margin-top: 30px;
  padding-left: 10px;
  padding-right: 10px;
`
const NormalP = styled.p`
  color: white;
  margin-top: 10px;
  padding: 0px;
`
const FooterStyle = css`
  @media screen and (max-width: 815px) {
    display: none;
  }
`

const link = css`
  color: #d0bfff;
`

const Footer = () => {
  return (
    <div css={FooterStyle}>
      <WrapperDiv>
        <br />
        <small>
          Samsung Software Academy For Youth 2nd.
          <br />
          멀티캠퍼스 서울 특별시 강남구 언주로 508(역삼동, 서울상록빌딩)
        </small>
        <br />
        <NormalP>
          <small>
            Copyright by 서울 A306 6:00-Not-Found Team. All rights reserved.
          </small>
        </NormalP>
        <small>
          <StressedSpan>
            <a
              css={link}
              href="https://github.com/JunSeongA"
              target="_blank"
              rel="noopener noreferrer"
            >
              박준성
            </a>
          </StressedSpan>
          <StressedSpan>
            <a
              css={link}
              href="https://github.com/hackthegist"
              target="_blank"
              rel="noopener noreferrer"
            >
              배성호
            </a>
          </StressedSpan>
          <StressedSpan>
            <a
              css={link}
              href="https://github.com/Imsunwoo-hub"
              target="_blank"
              rel="noopener noreferrer"
            >
              임선우
            </a>
          </StressedSpan>
          <StressedSpan>
            <a
              css={link}
              href="https://github.com/simmmba"
              target="_blank"
              rel="noopener noreferrer"
            >
              조서원
            </a>
          </StressedSpan>
        </small>
        <NormalP>
          <small>
            대표번호 : 010-2990-5719
            <br />
            고객센터 : jsy9532@naver.com
            <br />
            상담시간 : 평일 09:00~18:00
          </small>
        </NormalP>
      </WrapperDiv>
    </div>
  )
}

export default Footer
