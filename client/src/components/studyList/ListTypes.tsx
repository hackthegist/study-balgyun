export type FieldFormStoreType = {
  handleCancel: () => void
}

export type FilterData = {
  searchBy: string
  searchText: string | null
  lcategory: string | null
  scategory: string | null
  city: string | null
  town: string | null
  weekdayOrWeekend: number | null
  isOnline: number | null
  [key: string]: string | number | null
}
