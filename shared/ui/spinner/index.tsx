import { FC } from "react";

type SpinnerProps = {
	width?: number;
	height?: number;
};

const Spinner: FC<SpinnerProps> = ({ width = 48, height = 48 }) => (
	<div className={`loading loading-spinner w-[${width}px] h-[${height}px]`}></div>
);

export default Spinner;
