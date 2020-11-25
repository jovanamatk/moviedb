import React from 'react';
import { Card } from './common/Card';

interface Props {

}

export const Movies: React.FC<Props> = () => {
        return(
            <div className="grid-container">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        );
}