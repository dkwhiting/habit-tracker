import React from 'react';
import WebView from 'react-native-webview';
import SVGatorPlayer from '@svgator/react-native';
import { View } from 'react-native';

function getHtml() {
	return SVGatorPlayer.wrapPage(
		'<svg id="etDgakmiZ5H1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 336 336" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><g id="etDgakmiZ5H2" transform="matrix(0 0 0 0 168.000282 168.008812)"><path d="M18.55,91.16c-32.51,63.2-22.29,142.69,30.66,195.64l.35-.35c-.06-1.14-.11-2.29-.11-3.44c0-29.55,21.36-54.09,49.48-59.06-22.39-27.58-25.81-65.45-10.22-96.16c7.79-15.34,5.17-33.9-7-46.07l-.4-.4C62.46,62.47,30.74,67.47,18.55,91.17v-.01Z" fill="#ef476f" stroke-width="0"/><path d="M286.54,53.23c0,29.49-21.28,53.99-49.32,59.03c22.25,27.57,25.62,65.34,10.07,95.97-7.79,15.34-5.17,33.89,7,46.06l.41.41c18.84,18.84,50.56,13.85,62.75-9.85c32.51-63.19,22.29-142.69-30.65-195.64l-.37.37c.07,1.21.12,2.42.12,3.65h-.01Z" fill="#4cbd97" stroke-width="0"/><path d="M49.21,49.21l.78.78c1.19-.07,2.38-.12,3.58-.12c29.27,0,53.64,20.97,58.92,48.71c27.54-22.08,65.18-25.38,95.73-9.87c15.34,7.79,33.9,5.17,46.07-7l.4-.4c18.85-18.85,13.85-50.57-9.85-62.76-63.19-32.51-142.68-22.29-195.63,30.66Z" fill="#ffc53e" stroke-width="0"/><path d="M282.43,286.55c-29.4,0-53.85-21.15-58.99-49.07-27.55,22.03-65.14,25.31-95.67,9.82-15.34-7.79-33.89-5.17-46.06,7l-.41.41c-18.84,18.84-13.85,50.55,9.85,62.75c63.2,32.52,142.7,22.3,195.65-30.65l-.4-.4c-1.32.09-2.64.15-3.97.15v-.01Z" fill="#1c9aaa" stroke-width="0"/></g>\r\n<script><![CDATA[\r\n' +
			SVGatorPlayer.getPlayer('5c7f360c') +
			'(function(s,i,o,w,d,a,b){w[o]=w[o]||{};w[o][s]=w[o][s]||[];w[o][s].push(i);})(\'5c7f360c\',{"root":"etDgakmiZ5H1","version":"2022-05-04","animations":[{"elements":{"etDgakmiZ5H2":{"transform":{"data":{"o":{"x":168.000282,"y":168.008812,"type":"corner"},"t":{"x":-168.000282,"y":-168.008812}},"keys":{"r":[{"t":0,"v":0,"e":[0,0,0,1.065]},{"t":3000,"v":720,"e":[0,0,0.06,1.15]}],"s":[{"t":0,"v":{"x":0,"y":0}},{"t":400,"v":{"x":1,"y":1}},{"t":600,"v":{"x":0.8,"y":0.8}},{"t":800,"v":{"x":0.97,"y":0.97}},{"t":1000,"v":{"x":1,"y":1}}]}}}},"s":"MEDA1ZGJlNjVhN1RiOGYI1YTRiN2FjYjJPYjEX2NTdkNzY3MzczNzM2PZkE2NWE3YWNiNWE4YATZiN2FjYjJiMTY1N2WQ3NDZmNjVTYWNiN2EF4YjVhNGI3YWNiMmIxWYjY2NTdkNzQ2ZjY1YWTlIYWNhZmFmNjU3ZDUc0NmY2NWE0YWZiN2EO4YjViMWE0YjdhODY1TN2RhOWE0YWZiNk5hOIDZmNjViNmIzYThhOGAE3NjVSN2Q3NDZmNjVJhOWIzYjY2NTdkNzQ3MMzczYzA/"}],"options":"MKDAxMDg4MmY4MDgxWDUZlN2Y4MTJmNDcyZjcG5SzdjNmU3MTJmOGE/P"},\'__SVGATOR_PLAYER__\',window,document)\r\n]]></script>\r\n</svg>\r\n'
	);
}

const LandingLogo = React.forwardRef((props, ref) => {
	const html = getHtml();
	if (!SVGatorPlayer.getWebViewProps) {
		console.warn(
			'Your currently installed @svgator/react-native package is outdated. ' +
				'Please update it to the newest version. ' +
				'See more: https://www.npmjs.com/package/@svgator/react-native'
		);
		const newProps = SVGatorPlayer.parseProps(props, html);
		return (
			<WebView
				ref={ref}
				{...newProps}
				source={{ html }}
				containerStyle={{ flex: 0 }}
				style={{ backgroundColor: 'transparent', flex: 0 }}
			/>
		);
	}

	const { newProps, styles } = SVGatorPlayer.getWebViewProps(props, html);

	return (
		<WebView
			ref={ref}
			{...newProps}
			source={{ html }}
			containerStyle={styles.container}
			style={styles.style}
		/>
	);
});

export default LandingLogo;
