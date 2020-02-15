import React from 'react'
/**@jsx jsx */
import { css, jsx } from '@emotion/core'
import { Icon, Empty } from 'antd'
import { StudySchedule } from './StudyGroupType'
import { useObserver } from 'mobx-react'
import StudyStore from '../../stores/StudyStore'
import UserStore from '../../stores/UserStore'
import { useHistory } from 'react-router'
const StudyGroupSchedule = () => {
  const history = useHistory()
  const studyScheduleList = StudyStore.studyGroup.studyScheduleDTOList
  const main = css`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-content: center; */
    /* border: 1px solid black; */
  `

  const upper = css`
    display: flex;
    justify-content: space-between;
    padding: 8px 0px 10px 20px;
  `

  const title = css`
    display: flex;
    font-weight: bold;
    font-size: 21px;
    color: #004584;
    /* padding: 0px 17px 0px 5px; */
  `

  const content = css`
    display: flex;
    background: #f4fcff;
    border-radius: 10px;
    margin-bottom: 2px;

    &:hover {
      cursor: pointer;
      background-color: #e6f7ff;
    }
  `

  const left = css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* border: 1px solid black; */
    padding: 10px 20px 10px 20px;
    border-right: 2px dashed #fff;
  `

  const right = css`
    display: flex;
    flex-direction: column;
    /* border: 1px solid black; */
    padding: 10px 10px 10px 20px;
    justify-content: center;
    width: 70%;
  `
  const cnt = css`
    display: flex;
    justify-content: center;
    font-weight: bold;
  `
  const date = css`
    display: flex;
    justify-content: center;
    font-size: 13px;
  `
  const subject = css`
    font-weight: bold;
    font-size: 18px;
  `

  const homework = css`
    padding-left: 6px;
  `

  const icon = css`
    display: flex;
    justify-content: center;
    align-items: center;
  `

  const updateNDeleteLink = css`
    float: right;
    display: flex;
    align-items: center;
  `

  const btn = css`
    background-color: #fff;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    color: navy;

    background: #d9e5ff;
    border-radius: 7px;
    width: 130px;
    height: 30px;

    &:hover {
      background-color: #b2ccff;
    }
  `

  const empty = css`
    /* border: 1px solid black; */
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `

  // const clickUpdateSchedule = ()  => {
  // }
  const clickDeleteSchedule = (id: number): void => {
    StudyStore.deleteStudySchedule(Number(id))
  }

  return useObserver(() => (
    <div css={main}>
      <div css={upper}>
        <div css={title}>
          <Icon
            css={icon}
            type="schedule"
            style={{ fontSize: 24 }}
            theme="twoTone"
            twoToneColor="navy"
          />
          &nbsp;스터디 스케줄
        </div>
        {studyScheduleList.length > 0 ? (
          <button css={btn}>
            스케줄 추가&nbsp;&nbsp;
            <Icon
              css={icon}
              type="plus-circle"
              style={{ fontSize: 20 }}
              theme="twoTone"
              twoToneColor="navy"
            />
          </button>
        ) : (
          <div></div>
        )}
      </div>
      {studyScheduleList.length > 0 ? (
        studyScheduleList.map((s: StudySchedule, index: number) => (
          <div css={content} key={s.id}>
            <div css={left}>
              <div css={cnt}>{index + 1}회차</div>
            </div>
            <div css={right}>
              <div css={subject}>{s.subject}</div>
              <div css={homework}>
                <b>시간 )</b> {s.meetDate.substr(0, 4)}년{' '}
                {s.meetDate.substr(5, 2)}월 {s.meetDate.substr(8, 2)}일{' '}
                {s.meetDate.substr(11, 2)}시 {s.meetDate.substr(14, 2)}분
              </div>
              <div css={homework}>
                <b>장소 )</b> {s.location}
              </div>
              <div css={homework}>
                <b>준비사항 )</b> {s.homework}
              </div>
            </div>
            {UserStore.loginUser.id === StudyStore.studyGroup.leader.id ? (
              <div css={updateNDeleteLink}>
                {/*<span onClick={() => clickUpdateSchedule()}>수정</span>*/}
                &nbsp;&nbsp;
                <span onClick={() => clickDeleteSchedule(s.id)}>삭제</span>
              </div>
            ) : (
              <div />
            )}
          </div>
        ))
      ) : (
        <Empty
          css={empty}
          description={
            <h3>
              <br />
              등록된 스케줄이 없습니다 😮
            </h3>
          }
        >
          <button css={btn}>
            스케줄 추가&nbsp;&nbsp;
            <Icon
              css={icon}
              type="plus-circle"
              style={{ fontSize: 20 }}
              theme="twoTone"
              twoToneColor="navy"
            />
          </button>
        </Empty>
      )}
    </div>
  ))
}

export default StudyGroupSchedule