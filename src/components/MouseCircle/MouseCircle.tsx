import './MouseCircle.scss';

type Props = {
    circlePosition: { top: number; left: number };
};

export const MouseCircle = ({ circlePosition }: Props) => {
    return (
        <div
            className="mouse-circle"
            style={{
                top: `${circlePosition.top}px`,
                left: `${circlePosition.left}px`,
            }}
        />
    );
};
