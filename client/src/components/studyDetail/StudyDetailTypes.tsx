import * as H from 'history'
export type studyDetailType = {
  id: number
  title: string
  hits: number
  leader: user
  contents: string
  city: string
  town: string
  startDate: string
  endDate: string
  lcategory: string
  scategory: string
  joinedMemberCount: number
  maxParticipants: number
  isOnline: boolean
  monthOrWeek: number
  frequency: number
  weekdayOrWeekend: number
  timeslot: number
  evaluationLimit: number
  state: number
  studyMemberDTOList: studyMember[]
}

export type StudyDetailStoreType = {
  studyId: number
  studyMember: number
  studyRequest: number
  data: studyDetailType
  modalVisible: boolean
  studyDetail: () => void
  deleteStudy: (studyId: number, history: H.History) => void
  studyTodo: (state: number) => void
  insertMember: (studyId: number) => void
  goStudyGroup: (studyId: number, history: H.History) => void
  deleteStudyMember: (studyId: number, state: number) => void
  isJoin: () => boolean
  isMember: () => boolean
  updateStudyMember: (studyId: number, userId: number, state: number) => void
}

export type studyMember = {
  user: user
  state: number
}

export type user = {
  id: number
  nickname: string
  evaluation: number
}
