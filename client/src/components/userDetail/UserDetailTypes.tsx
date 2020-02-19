import * as H from 'history'
export type UserInfoType = {
    id : number
    email : String
    phoneNum : String
    nickname : String
    gender : number
    introduction : String
    city : String
    town : String
    evaluation : number
    profilePhotoDir : String 
    interestDTOList : Interest[]
    ledStudyList : LedStudy[]
    joinedStudyList : JoinedStudy[]
}
export type UserDetailStoreType = {
    data: UserInfoType
    joinCount : number
    mypage: () => void
    goUserInfo: (userId: number, history : H.History) => void
    userInfo: (userId : number) => void
    deleteStudyMember: (studyId : number, idx : number)=> void
}
export type Interest = {
    lcategory: string
    scategory: string
}

 export type LedStudy = {
    id : number
    title : String 
    state : number
    maxParticipants : number
    isOnline : boolean
    startDate : String
    endDate : String
    joinedMemberCount : number
 }

 export type JoinedStudy ={
     study : study
     state : number
 }

 export type study = {
    id : number
    title : String 
    state : number
    maxParticipants : number
    isOnline : boolean
    startDate: String 
    endDate : String 
    joinedMemberCount : number
 }