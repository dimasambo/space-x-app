import {LaunchType} from "../../../types/types";
import {FC, useState} from "react";
import {LaunchCard} from "./LaunchCard/LaunchCard";
import {StyledLaunches, StyledModalLaunch} from "./StyledLaunches";


type PropsType = {
    launches: Array<LaunchType>
}

export const Launches: FC<PropsType> = ({launches}) => {
    return <StyledLaunches>
        {launches.length === 0
            ? <div>No Launches with such name</div>
            : launches.map((launch, index) => {
                return <LaunchCard count={index + 1} key={launch.id} launch={launch}/>
            })
        }
    </StyledLaunches>
}