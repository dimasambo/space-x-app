import React, {FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {LaunchType} from "../../types/types";
import {requestCores, requestPaginatedLaunches, requestRockets} from "../../Redux/launches/launches-reducer";
import {Launches} from "./Launches/Launches";
import {AppStateType} from "../../Redux/redux-store";
import {StyledLaunchesPage} from "./StyledLaunchesPage";
import {Filter} from "./Filter/Filter";


export type FiltersType = {
    rocket: string
    core: string
}

export const LaunchesPage: FC = () => {

    const nextPage = useSelector((state: AppStateType) => state.launches.paginatedLaunches.nextPage)
    const totalLaunches = useSelector((state: AppStateType) => state.launches.paginatedLaunches.totalDocs)
    const launches = useSelector((state: AppStateType) => state.launches.paginatedLaunches.docs)
    const allRequestedLaunches = useSelector((state: AppStateType) => state.launches.allLaunches)
    const rockets = useSelector((state: AppStateType) => state.launches.rockets)
    const cores = useSelector((state: AppStateType) => state.launches.cores)

    const [fetching, setFetching] = useState(true)
    const [filters, setFilters] = useState<FiltersType>({rocket: '', core: ''})
    const [filteredLaunches, setFilteredLaunches] = useState<Array<LaunchType>>(allRequestedLaunches)
    const [isFilterByRocketOpen, setIsFilterByRocketOpen] = useState(false)
    const [isFilterByCoreOpen, setIsFilterByCoreOpen] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        if (fetching) {
            // @ts-ignore
            dispatch(requestPaginatedLaunches(nextPage))
            setFetching(false)
        }
    }, [fetching])

    useEffect(() => {
        // @ts-ignore
        dispatch(requestRockets())
        // @ts-ignore
        dispatch(requestCores())
    }, [])

    useEffect(() => {
        if (filters.rocket !== '' || filters.core !== '') {
            filterLaunches()
        }

        document.addEventListener('scroll', scrollHandler)

        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [allRequestedLaunches])


    const scrollHandler = (e: any) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 1
            && allRequestedLaunches.length < totalLaunches) {
            document.removeEventListener('scroll', scrollHandler)
            setFetching(true)
        }
    }

    const onFilterClick = (id: string, type: 'rocket' | 'core') => {
        setFilters({...filters, [type]: id})
    }

    useEffect(() => {
        filterLaunches()
    }, [filters])

    useEffect(() => {
        console.log(filteredLaunches)
    }, [filteredLaunches])

    const filterLaunches = () => {
        if ((filters.rocket !== '') && (filters.core === '')) {
            setFilteredLaunches(allRequestedLaunches.filter((launch) => {
                    return launch.rocket === filters.rocket
                })
            )
        } else if ((filters.core !== '') && (filters.rocket === '')) {
            setFilteredLaunches(allRequestedLaunches.filter((launch) => {
                    return launch.cores[0].core === filters.core
                })
            )
        } else if ((filters.core !== '') && (filters.rocket !== '')) {
            setFilteredLaunches(allRequestedLaunches.filter((launch) => {
                    return (launch.cores[0].core === filters.core && launch.rocket === filters.rocket)
                })
            )
        }
    }

    return <StyledLaunchesPage>
        <Filter isOpen={isFilterByRocketOpen} setIsOpen={setIsFilterByRocketOpen}
                items={rockets} onFilterClick={onFilterClick} filters={filters} type={'rocket'} />
        <Filter isOpen={isFilterByCoreOpen} setIsOpen={setIsFilterByCoreOpen}
                items={cores} onFilterClick={onFilterClick} filters={filters} type={'core'} />
        {launches && <Launches launches={
            ((filters.rocket !== '') || (filters.core !== ''))
                ? filteredLaunches
                : allRequestedLaunches
        }/>}
    </StyledLaunchesPage>
}