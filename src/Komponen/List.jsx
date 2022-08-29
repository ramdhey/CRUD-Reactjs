import React, { useState } from 'react'

import { MapList } from './MapList'
import { Formnya } from './Form';

export const List = () => {

    const [listnya, setListnya] = useState([])

    const tambahList = (list) => {
        const listBaru = [list, ...listnya]
        
        setListnya(listBaru)
        console.log(listBaru)


    }

    const deleteListnya = (id) => {
        const deleted = [...listnya].filter((list)=> list.id !== id)
        setListnya(deleted)
    }

    // console.log(listnya)

    return (
        <div>

            <Formnya onSubmit={tambahList} />
            <MapList listnya={listnya} deleteListnya={deleteListnya}/>
        </div>

    )
}



