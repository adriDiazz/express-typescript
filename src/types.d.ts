export type Wheather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy"

export type Visibility = "good" | "poor" | "great" | "ok"


export interface Diary {
    id: number,
    date: string,
    weather: Wheather,
    visibility: Visibility,
    comment: string
}