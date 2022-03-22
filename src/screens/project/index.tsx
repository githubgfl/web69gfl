import React from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route, Navigate, } from 'react-router'

import { KanbanDcreen } from 'screens/kanban'
import { EpicScreen } from 'screens/epic'

export const ProjectScreen = () => {
    return (
        <div>
            <Link to={'kanban'}>看板</Link>
            <Link to={'epic'}>任务组</Link>
            <Routes>
              
                <Route path={'/kanban'} element={<KanbanDcreen />} />
                <Route path={'/epic'} element={<EpicScreen />} />
                 <Route index element={<KanbanDcreen />} />

            </Routes>




        </div>
    )
}