import {LaunchType} from "../../../../types/types";
import {FC, useState} from "react";
import {StyledLaunchCard} from "./StyledLaunchCard";
import {StyledModalLaunch} from "../StyledLaunches";

type UserPropsType = {
    launch: LaunchType
    count: number
}

export const LaunchCard: FC<UserPropsType> = ({launch, count}) => {
    const [isModalShown, setIsModalShown] = useState(false)

    return <>
        <StyledLaunchCard count={count} onClick={() => setIsModalShown(true)}>
            <div className={'pokemonCardImgBox'}>
                {(count % 3 === 0)
                    ? <img
                        src={'https://media.cnn.com/api/v1/images/stellar/prod/221005130348-09b-spacex-nasa-launch-1005.jpg?c=original&q=w_1376,c_fill'}/>
                    : ((count % 3 === 1)
                        ? <img
                            src={'https://www.universetoday.com/wp-content/uploads/2009/01/falcon9_vertical002.jpg'}/>
                        : <img
                            src={'https://spacecoastdaily.com/wp-content/uploads/2019/02/Nusantara-Satu-satellite-SpaceX-Falcon-9-1000-2.jpg'}/>)
                }
            </div>
            <div className={'pokemonCardNameBox'}>
                <span>Launch Name: {launch.name}</span>
            </div>
        </StyledLaunchCard>
        {isModalShown &&
        <StyledModalLaunch>
            <div className={'closeModal'} onClick={() => setIsModalShown(false)}>Close</div>
            <div className={'launchDetails'}>
                <div className={'detailLaunch'}><span>Launch Name: </span>{launch.name}</div>
                <div className={'detailLaunch'}><span>Rocket Id: </span>{launch.rocket}</div>
                <div className={'detailLaunch'}><span>Core Id: </span>{launch.cores[0].core}</div>
                <div className={'detailLaunch'}><span>Launchpad: </span>{launch.launchpad}</div>
                <div className={'detailLaunch'}><span>Local Date: </span>{launch.date_local}</div>
                <div className={'detailLaunch'}><span>Details: </span>{launch.details}</div>
            </div>
        </StyledModalLaunch>
        }
    </>
}