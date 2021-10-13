import React from 'react'
import { useState } from 'react'
import { Bar } from './bar';


export const Graph = () => {
    var bars = []
    // console.log(bars)
    var [change, setChange] = useState(0);
    for (var i = 0; i < 40; i++) {
        // console.log("heere")
        var rand = Math.floor((Math.random() * 40) + 1);
        bars = [...bars, {
            len: rand * 10,
            id: i
        }];
        console.log(bars)
    }
    
    let sorting = () => {
        let len = bars.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (bars[j] > bars[j + 1]) {
                    let tmp = bars[j];
                    bars[j] = bars[j + 1];
                    bars[j + 1] = tmp;
                }
            }
        }
    }
        
    

    return (
        <div className="wrapper2">
            <div className="bgraph">
{   if(change === 0)
{
                {
                    bars.map(bar =>
                        <Bar length={bar.len} key={bar.id} />
                    )
                }}}
            </div>
            <div className="sort-btn">
                <button onClick={sorting}>Sort</button>

                <button     >Generate Chart</button>

            </div>
        </div>
    )
}
