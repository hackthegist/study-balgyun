/** @jsx jsx */
import { useEffect } from 'react'
import { jsx, css } from '@emotion/core'
import StudyStore from '../../stores/StudyStore'
import { useObserver } from 'mobx-react'
import StudyRank from './StudyRank'
import palette from '../../lib/styles/palette'

const studyRank = css`
  display: flex;
  justify-content: space-around;
  background: ${palette.violet[0]};
  flex-wrap: wrap;
  padding: 20px 20px 100px 20px;
`

function MainStudyList() {
  useEffect(() => {
    StudyStore.fetchMainStudyList()
  }, [])

  return useObserver(() => (
    <div css={studyRank}>
      <StudyRank title="myStudy" list={StudyStore.myStudy} />
      <StudyRank title="recentStudy" list={StudyStore.recentStudy} />
      <StudyRank title="famousStudy" list={StudyStore.famousStudy} />
    </div>
  ))
}

export default MainStudyList
