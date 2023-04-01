import { useState } from 'react';
import './EnemyCricles.scss';
import { EnemyCircleVm } from './EnemyCircle.vm';

export const EnemyCircles = () => {
    const [vm] = useState(() => new EnemyCircleVm());

    const circles = vm.circlesArray.map(circle => (
        <div
            className="circle"
            style={{
                top: `${circle.top}px`,
                left: `${circle.left}px`,
                width: `${circle.size}rem`,
                height: `${circle.size}rem`,
            }}
            key={circle.id}
        />
    ));

    return <>{circles}</>;
};
