// import React from 'react'
/**@jsx jsx */
import { css, jsx } from '@emotion/core'
import { NavLink } from 'react-router-dom'
import { StudyRankprops, Study } from './MainTypes'
import LoadingSpin from '../common/LoadingSpin'

const listBox = css`
  /* width: 650px; */
  margin: 10px;
  /* border: 1px solid red; */
  background-color: white;
  padding: 15px 15px 20px 15px;
  width: 400px;
  border-radius: 10px;
  /* border: 10px solid rgb(236, 236, 236); */
  /* border: 10px solid #d9e5ff; */
`
const listTitle = css`
  font-size: 15px;
  font-weight: 900;
  color: grey;
  margin-bottom: 10px;
  /* border: 1px solid skyblue; */
`

const listContent = css`
  display: flex;
  /* border: 1px solid yellow; */
  padding: 0px 0px 3px 0px;
  &:hover {
    background: rgb(236, 236, 236);
  }
`

const listRank = css`
  margin: 5px 20px 5px 15px;
  /* border: 1px solid orange; */
  color: grey;
  font-weight: bold;
`

const listName = css`
  margin: 5px 5px 0px 5px;
  /* border: 1px solid green; */
  font-weight: 750;
`

const listType = css`
  margin: 0px 5px 5px 5px;
  /* border: 1px solid purple; */
  font-size: small;
`

const listContainer = css`
  display: flex;
  flex-direction: table-column;
  justify-content: flex-end;
  /* vertical-align: middle; */
  /* border: 1px solid brown; */
  height: 0px;
`

const empty = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100%; */
  margin-top: 20px;
`

const link = css`
  margin: 10px 0px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  color: navy;

  background: #d9e5ff;
  border-radius: 7px;
  width: 150px;
  height: 30px;
  transition: 0.3s;

  &:hover {
    background-color: #b2ccff;
    color: navy;
  }
`

const titleMap: { [key: string]: string } = {
  myStudy: '내 진행 중인 스터디',
  recentStudy: '최근 개설된 스터디',
  famousStudy: '지금 급상승 중인 스터디'
}

const StudyRank = ({ title, list }: StudyRankprops) => {
  return (
    <div css={listBox}>
      <div css={listTitle}>{titleMap[title]}</div>
      {list.length > 0 ? (
        list.map((study: Study, index: number) => (
          <NavLink to={`study/details/${study.id}`} key={index}>
            <div css={listContent}>
              <div css={listRank}>
                <p>{index + 1}</p>
              </div>
              <div css={listContainer}>
                <div>
                  <div css={listName}>{study.title}</div>
                  <div css={listType}>{study.lcategory}</div>
                </div>
              </div>
            </div>
          </NavLink>
        ))
      ) : title === 'myStudy' ? (
        <div css={empty}>
          <span className="emoji" role="img" aria-label={'^^'}>
            참여중인 스터디가 없네요 😅
          </span>
          스터디를 둘러보시겠어요?
          <NavLink css={link} to="/study">
            스터디 보러가기
          </NavLink>
        </div>
      ) : (
        <LoadingSpin />
      )}
    </div>
  )
}

export default StudyRank
