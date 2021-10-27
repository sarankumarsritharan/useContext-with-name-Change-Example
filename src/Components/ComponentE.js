import React,{useContext} from 'react'
import ComponentF from './ComponentF'
import {UserContext,ChannelContext} from '../App'

function ComponentsE() {

    const user=useContext(UserContext)
    const channel=useContext(ChannelContext)

    return (
        <div>
            {user}-{channel}
        </div>
    )
}

export default ComponentsE
