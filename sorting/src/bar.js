import React from 'react'
import { useState } from 'react'


export const Bar = ({length, id}) => {
    
    return (
        <div className = "bar" style={{height: length}} >
             <p>{length}</p>
        </div>
    )
}
