import React from 'react'
import lamp_gear from '../../assets/images/lamp_gears_tr.png';
import three_gears from '../../assets/images/three_gears_tr.png';
import one_gear from '../../assets/images/one_gear.png';
import gears from '../../assets/images/many_gears2.png';

function Decorations() {
    return (
        <div>
            <img className="lamp" src={lamp_gear} alt='Lamp with gears'/>
            <img className="three_gears" src={three_gears} alt='Three gears'/>
            <img className="one_gear" src={one_gear} alt='One gears'/>
            <img className='gears' src={gears} alt='chart'/>
        </div>
    )
}

export default Decorations