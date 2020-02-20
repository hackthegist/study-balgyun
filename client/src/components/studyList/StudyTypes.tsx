export type Study = {
    id: number,
    title: string,
    leader: {
        id: number,
        nickname: string,
        profilePhotoDir: string
    },
    city: string,
    town: string,
    state: number,
    maxParticipants: number,
    hits: number,
    isOnline: boolean,
    monthOrWeek: number,
    frequency: number,
    weekdayOrWeekend: number,
    timeslot: number,
    evaluationLimit: number|null,
    enrollDate: string,
    startDate: string,
    endDate: string,
    joinedMemberCount: number,
    lcategory: string,
    scategory: string
}