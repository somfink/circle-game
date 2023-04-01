type Circles = {
    id: number,
    top: number;
    left: number;
    size: number;
};

export class EnemyCircleVm {
    circlesArray: Circles[] = [];

    constructor() {
        this.generator();
    }

    generator = () => {
        const quantity = Math.floor(Math.random() * 100) + 1;

        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;

        const circles = Array(quantity)
            .fill({ top: 0, left: 0, size: 0 })
            .map((circle, index) => {
                const top = Math.floor(Math.random() * windowHeight) + 1;
                const left = Math.floor(Math.random() * windowWidth) + 1;
                const size = Math.floor(Math.random() * 6) + 4;
                return {
                    id: index,
                    top,
                    left,
                    size,
                };
            });

        this.circlesArray = circles;
    };
}
