import { MouseEventHandler, useEffect, useState } from 'react';
import './App.scss';

function App() {
    const [mousePos, setMousePos] = useState<{ x: number; y: number }>();
    const [circlePos, setCirclePos] = useState({
        top: 50,
        left: 50,
    });

    // circle size is calculated as 8rem * 12px, cause 1rem = 12px
    let circleSize = 8 * 12;

    const mouseMoveHandler = (e: MouseEvent) => {
        setMousePos({ x: e.clientX, y: e.clientY });

        setCirclePos({
            top: e.clientY - (circleSize / 2) ,
            left: e.clientX - (circleSize / 2),
        });
    };

    useEffect(() => {
        window.addEventListener('mousemove', mouseMoveHandler);

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler);
        };
    }, [mousePos]);

    return (
        <main className="main-container">
            <div
                className="main-circle"
                style={{
                    top: `${circlePos.top}px`,
                    left: `${circlePos.left}px`,
                }}
            ></div>
        </main>
    );
}

export default App;
