import React, { useState } from 'react'

import { send } from '../socketApi'

function Palette({ activeColor }) {
    const [color, setColor] = useState('#000')

    const handleChangeColor = (e) => {
        setColor(e.target.value)
    }
    const sendColor = () => {
        send(color)
    }
    return (
        <div className='palette'>
            <input
                type="color"
                value={activeColor}
                onChange={handleChangeColor}
            />
            <button onClick={sendColor}>Change Color</button>

        </div>
    )
}

export default Palette
