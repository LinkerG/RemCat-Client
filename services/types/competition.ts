export type Competition = {
    _id: string
    name: string
    date: Date
    location: string
    image: string
    boat_type: string
    lines: number
    line_distance: number
    isCancelled: boolean
    isLeague: boolean
    isChampionship: boolean
    isActive: boolean
}