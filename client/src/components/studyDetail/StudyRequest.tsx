import React, { useState } from 'react'
/**@jsx jsx */
import { css, jsx } from '@emotion/core'
import { Modal, Progress, Avatar } from 'antd'
import { studyMember } from '../studyDetail/StudyDetailTypes'
import StudyDetailStore from '../../stores/StudyDetailStore'
import UserDetailStore from '../../stores/UserDetailStore'
import { useObserver } from 'mobx-react'
import { Interest } from '../userDetail/UserDetailTypes'
import palette from '../../lib/styles/palette'

const StudyRequest = () => {
  const Emoji = (props: {
    label: string | undefined
    symbol: React.ReactNode
  }) => (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ''}
      aria-hidden={props.label ? 'false' : 'true'}
    >
      {props.symbol}
    </span>
  )

  const approveBtn = css`
    color: #5d5d5d;
    background: ${palette.violet[1]};
    font-weight: bold;
    font-size: 12px;
    border-radius: 30px;
    margin: 0px 0px 0px 3px;
    width: 40px;
    height: 25px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: ${palette.violet[2]};
    }
  `

  const denyBtn = css`
    color: #5d5d5d;
    background: ${palette.yellow[1]};
    font-weight: bold;
    font-size: 12px;
    border-radius: 30px;
    margin: 0px 0px 0px 3px;
    width: 40px;
    height: 25px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      background: ${palette.yellow[2]};
    }
  `

  const btnBox = css`
    display: flex;
    justify-content: flex-end;
  `

  const table = css`
    border-collapse: collapse;
    width: 350px;
  `

  const title = css`
    font-size: 20px;
    padding: 10px 10px 10px 15px;
    font-weight: bold;
    border-bottom: 2px solid #ddd;
    color: #5d5d5d;
  `

  const td = css`
    text-align: center;
    border-top: 2px solid #ddd;
    border-bottom: 2px solid #ddd;
    color: #5d5d5d;
    padding: 5px;
  `
  const nickname = css`
    color: grey;
    padding: 7px;
    text-align: center;
    width: 45%;
    border-top: 2px solid #ddd;
    border-bottom: 2px solid #ddd;
    color: #353535;
  `

  const evaluation = css`
    border-top: 2px solid #ddd;
    border-bottom: 2px solid #ddd;
    color: grey;
    padding: 7px;
    text-align: center;
    width: 45%;
  `
  const bottom = css`
    padding-bottom: 20px;
  `

  const w45 = css`
    border-top: 4px solid #ddd;
    border-bottom: 2px solid #ddd;
    color: grey;
    padding: 7px;
    text-align: center;
    width: 45%;
  `
  const w30 = css`
    border-top: 4px solid #ddd;
    border-bottom: 2px solid #ddd;
    color: grey;
    padding: 7px;
    text-align: center;
    width: 30%;
  `
  const w25 = css`
    border-top: 4px solid #ddd;
    border-bottom: 2px solid #ddd;
    color: grey;
    padding: 7px;
    text-align: center;
    width: 25%;
  `

  const memberInfoBtn = css`
    color: #5d5d5d;
    background: #fff;
    font-size: 14px;
    width: 100%;
    height: 25px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      font-weight: bold;
    }
  `

  const detailNickname = css`
    font-size: 25px;
    font-weight: bold;
    padding-right: 20px;
  `

  const modalTop = css`
    display: flex;
    justify-content: center;
    font-weight: bold;
    padding-top: 20px;
    margin-bottom: 20px;

    @media (max-width: 415px) {
      display: flex;
      flex-wrap: wrap;
    }
  `

  const text = css`
    font-size: 16px;
    padding-right: 30px;
  `
  const first = css`
    display: flex;
    margin-bottom: 10px;
  `

  const second = css`
    display: flex;
    margin-bottom: 10px;
    flex-wrap: wrap;
  `

  const comment = css`
    display: flex;
    font-size: 16px;
    flex-wrap: wrap;
    margin-top: 10px;
  `

  const img = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;

    @media (max-width: 415px) {
      width: 200px;
      height: auto;
      margin-bottom: 10px;
    }
  `

  const left = css`
    display: flex;
    flex-direction: column;
    margin: 5px 30px 0px 10px;

    @media (max-width: 415px) {
      margin: 0px 10px 0px 0px;
    }
  `

  const right = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0px 10px 0px 0px;
  `

  // 멤버 이름 클릭시
  const [visible, setVisible] = useState(false)

  const showModal = (id: number) => {
    UserDetailStore.userInfo(id)
    setVisible(true)
  }

  const handleCancel = () => {
    setVisible(false)
  }

  return useObserver(() => (
    <div css={bottom}>
      <table css={table}>
        <tbody>
          <tr>
            <td colSpan={3} css={title}>
              <span
                css={css`
                  color: ${palette.violet[9]};
                `}
              >
                참여 요청 ( {StudyDetailStore.studyRequest} )
              </span>
            </td>
          </tr>
          <tr>
            <th css={w45}>닉네임</th>
            <th css={w25}>성실도</th>
            <th css={w30} />
          </tr>
          {StudyDetailStore.data.studyMemberDTOList.map(
            (sm: studyMember, index: number) => (
              <tr key={index}>
                {sm.state === 0 && (
                  <td css={nickname}>
                    <button
                      css={memberInfoBtn}
                      onClick={() => showModal(sm.user.id)}
                    >
                      {sm.user.nickname}
                    </button>
                  </td>
                )}
                {sm.state === 0 && (
                  <td css={evaluation}>{sm.user.evaluation}</td>
                )}
                {sm.state === 0 && (
                  <td css={td}>
                    <div css={btnBox}>
                      <button
                        css={approveBtn}
                        onClick={() => {
                          StudyDetailStore.updateStudyMember(
                            StudyDetailStore.data.id,
                            sm.user.id,
                            1
                          )
                        }}
                      >
                        수락
                      </button>
                      <button
                        css={denyBtn}
                        onClick={() => {
                          StudyDetailStore.updateStudyMember(
                            StudyDetailStore.data.id,
                            sm.user.id,
                            2
                          )
                        }}
                      >
                        거절
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            )
          )}
        </tbody>
      </table>

      {/* 멤버 클릭 모달 */}
      <Modal
        visible={visible}
        destroyOnClose={true}
        onCancel={handleCancel}
        footer={null}
      >
        <div css={modalTop}>
          <div css={left}>
            <Avatar
              css={img}
              src={
                'http://13.124.98.149/images/' +
                UserDetailStore.data.profilePhotoDir
              }
              alt="프로필"
            />
          </div>
          <div css={right}>
            <div css={first}>
              <div css={detailNickname}>{UserDetailStore.data.nickname}</div>
            </div>
            <div css={second}>
              <span css={text}>
                참여중인 스터디&nbsp;&nbsp;
                <b>
                  {UserDetailStore.data.ledStudyList.length +
                    UserDetailStore.joinCount}
                </b>
              </span>
              <span css={text}>
                개설한 스터디&nbsp;&nbsp;
                <b>{UserDetailStore.data.ledStudyList.length}</b>
              </span>
            </div>
            <Progress
              strokeColor={{
                from: '#108ee9',
                to: '#87d068'
              }}
              percent={UserDetailStore.data.evaluation}
              status="active"
            />
            {UserDetailStore.data.interestDTOList.length > 0 && (
              <div css={comment}>
                <div>
                  <b>
                    <u>관심사</u>
                    <Emoji label="interest" symbol="✍️" />
                    &nbsp;&nbsp;&nbsp;
                  </b>
                </div>
                <div>
                  {UserDetailStore.data.interestDTOList.map(
                    (interest: Interest, index: number) => (
                      <span key={index}>#{interest.scategory}&nbsp;&nbsp;</span>
                    )
                  )}
                </div>
              </div>
            )}
            {UserDetailStore.data.introduction !== '' && (
              <span css={comment}>
                <div>
                  <b>
                    <u>한마디</u>
                    <Emoji label="comment" symbol="💬" />
                  </b>
                </div>
                &nbsp;&nbsp;&nbsp;
                <div>{UserDetailStore.data.introduction}</div>
              </span>
            )}
          </div>
        </div>
      </Modal>
    </div>
  ))
}

export default StudyRequest
