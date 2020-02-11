import React from 'react'
import styled from '@emotion/styled'

const Spacer = styled.div`
  height: 4rem;
`
const WrapperDiv = styled.div`
    background: #24282B;
    width: 100%;
    color: #AAAAAA;
    padding: 20px;
    text-align: center
`
const StressedSpan = styled.span`
    color: #3C7EB9;
    margin-top: 30px;
    padding-left:10px;
    padding-right:10px;
`
const NormalP = styled.p`
    color: white;
    margin-top: 10px;
    padding: 0px;
`

const Footer = () => {
    return (
        <div>
            <Spacer/>
            <WrapperDiv>
                <small>Samsung Software Academy For Youth 2nd.<br/>멀티캠퍼스 서울 특별시 강남구 언주로 508(역삼동, 서울상록빌딩)</small><br/>
                <NormalP><small>Copyright by 서울 A306 6:00NotFound Team. All rights reserved.</small></NormalP>
                <small>
                    <StressedSpan>박준성</StressedSpan>
                    <StressedSpan>배성호</StressedSpan>
                    <StressedSpan>임선우</StressedSpan>
                    <StressedSpan>조서원</StressedSpan>
                </small>
                <NormalP>
                    <small>문의 사항 : 010-2990-5719<br/>평일 문의 가능 시간 : 09:00~18:00</small>
                </NormalP>
            </WrapperDiv>
        </div>
    )
}

export default Footer