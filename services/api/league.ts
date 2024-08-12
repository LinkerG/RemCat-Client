import { apiClient } from "./apiClient"
import { League, TeamSummary } from "../types/league"

export const getLeagueResults = async (year: string) => {
    try {
        //const response = await apiClient.get("/competitions")
        const league: any = []
        console.log(league);

        return league
    } catch (error: any) {
        console.error("Error fetching data:", error.message)
        console.error(
            "Error details:",
            error.response ? error.response.data : "No response data",
        )
        throw error
    }
}
