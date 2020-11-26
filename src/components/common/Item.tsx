import * as React from 'react';
import { useLocation } from 'react-router';



export const Item: React.FC = () => {
    const location = useLocation();
    const {data} = (location.state as any);
    let item=data.data;
    
        return(<div>
            <h2>{item.title ? item.title : item.name}</h2>
            <p>{item.overview}</p>
        </div>);
}