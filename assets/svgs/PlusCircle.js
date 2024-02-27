import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const PlusCircle = (props) => (
	<Svg
		xmlns="http://www.w3.org/2000/svg"
		width={90}
		height={90}
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<Path
			fill="none"
			d="M0 0h24v24H0z"
		/>
		<Path
			fill="rgb(6, 214, 160)"
			fillRule="evenodd"
			d="M13 9a1 1 0 1 0-2 0v2H9a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2V9ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
			clipRule="evenodd"
		/>
	</Svg>
);
export default PlusCircle;
