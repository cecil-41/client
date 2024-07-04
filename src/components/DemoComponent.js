import React from 'react'

export function DemoComponent({name, country, children}){
    return(
        <div>
            <h1 className='text-tertiary'>My name is {name} from {country}</h1>
            {children}
        </div>
    );
}