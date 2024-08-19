import React, { useState, useEffect } from "react";
import { ScrollPage } from "../../components/Pages";
import { Team } from "../../types/types";
import { TeamCard } from "../../components/TeamCard";
import { getTeams } from "../../api/teams";
import { View } from "react-native";

export default function Teams() {
    const [teams, setTeams] = useState<Team[]>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setTeams(await getTeams());
            setLoading(false)
        };
        fetchData();
    }, []);

    return (
        <ScrollPage>
            <View className="m-5">
                {!loading && teams?.map((team) => (
                    <TeamCard key={team.shortName} team={team} />
                ))}
            </View>
        </ScrollPage>
    );
}