import { useEffect, useState } from 'react';
import { MouseCircle } from './components/MouseCircle/MouseCircle';
import './App.scss';
import { EnemyCircles } from './components/EnemyCircles/EnemyCircles';

function App() {
    const [mousePos, setMousePos] = useState<{ x: number; y: number }>();
    const [circlePos, setCirclePos] = useState({
        top: 50,
        left: 50,
    });
    const [enemyCirclePos, setEnemyCirclePos] = useState({
        top: 500,
        left: 500,
        size: 4,
    });

    // circle size is calculated as 8rem * 12px, cause 1rem = 12px
    let circleSize = 8 * 12;

    const mouseMoveHandler = (e: MouseEvent) => {
        setMousePos({ x: e.clientX, y: e.clientY });

        setCirclePos({
            top: e.clientY - circleSize / 2,
            left: e.clientX - circleSize / 2,
        });
    };

    useEffect(() => {
        window.addEventListener('mousemove', mouseMoveHandler);

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler);
        };
    }, [mousePos]);

    // setInterval(() => {
    //     const random = Math.random();
    //     if (random > 0.25 && random <= 0.5) {
    //         setEnemyCirclePos(prevState => ({
    //             top: prevState.top,
    //             left: prevState.left - 1,
    //             size: 4,
    //         }));
    //         return;
    //     }
    //     if (random > 0.5 && random <= 0.75) {
    //         setEnemyCirclePos(prevState => ({
    //             top: prevState.top,
    //             left: prevState.left + 1,
    //             size: 4,
    //         }));
    //         return;
    //     }
    //     if (random > 0.75) {
    //         setEnemyCirclePos(prevState => ({
    //             top: prevState.top - 1,
    //             left: prevState.left,
    //             size: 4,
    //         }));
    //         return;
    //     }
    //     setEnemyCirclePos(prevState => ({
    //         top: prevState.top + 1,
    //         left: prevState.left,
    //         size: 4,
    //     }));
    // }, 5000);

    return (
        <main className="main-container">
            <MouseCircle circlePosition={circlePos} />
            <EnemyCircles />
        </main>
    );
}

export default App;
