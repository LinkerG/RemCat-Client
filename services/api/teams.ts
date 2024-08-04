import { apiClient } from "./apiClient"
import { Team } from "../types/team"

export const getTeams = async () => {
    try {
        const response = await apiClient.get("/teams")
        console.log(response.data.teams);
        const teams: Team[] = response.data.teams;
        return teams
    } catch (error: any) {
        console.error("Error fetching data:", error.message)
        console.error(
            "Error details:",
            error.response ? error.response.data : "No response data",
        )
        throw error
    }
}

export const getTeam = async (teamName: string) => {
    try {
        const response = await apiClient.get(`/teams/${teamName}`)
        console.log(response.data.teams);
        const team: Team = response.data.team;
        return team
    } catch (error: any) {
        console.error("Error fetching data:", error.message)
        console.error(
            "Error details:",
            error.response ? error.response.data : "No response data",
        )
        throw error
    }
}

//export const postTeam = async (teamData: object) => { }