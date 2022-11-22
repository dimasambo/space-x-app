import {StyledFilter, StyledFilterItem} from "./StyledFilter";
import React, {FC} from "react";
import {FiltersType} from "../LaunchesPage";

type PropsType = {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    items: Array<any>
    onFilterClick: (id: string, type: 'rocket' | 'core') => void
    filters: FiltersType
    type: 'rocket' | 'core'
}

export const Filter: FC<PropsType> =
    ({isOpen, setIsOpen, items, onFilterClick, filters, type}) => {
        return <StyledFilter>
            <div className={'filterHeader'}
                 onClick={() => {
                     setIsOpen(!isOpen)
                 }}>
                {type === "rocket" ? 'Filter by rocket name >' : 'Filter by core serial >'}
            </div>
            {isOpen && <div className={'filtersWrapper'}>
                {
                    items.length && items.map(item =>
                        <StyledFilterItem key={item.id}
                                          onClick={() => onFilterClick(item.id, type)} item={item.id}
                                          filterItem={type === 'rocket' ? filters.rocket : filters.core}>
                            {type === 'rocket' ? item.name : item.serial}
                        </StyledFilterItem>)
                }
            </div>}
        </StyledFilter>
    }