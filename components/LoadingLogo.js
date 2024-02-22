import React from 'react';
import WebView from 'react-native-webview';
import SVGatorPlayer from '@svgator/react-native';

function getHtml() {
	return SVGatorPlayer.wrapPage(
		'<svg id="e2k9vgn67jd1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 336 336" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><g id="e2k9vgn67jd2"><path d="M18.55,91.16c-32.51,63.2-22.29,142.69,30.66,195.64l.35-.35c-.06-1.14-.11-2.29-.11-3.44c0-29.55,21.36-54.09,49.48-59.06-22.39-27.58-25.81-65.45-10.22-96.16c7.79-15.34,5.17-33.9-7-46.07l-.4-.4C62.46,62.47,30.74,67.47,18.55,91.17v-.01Z" fill="#ef476f" stroke-width="0"/><path d="M286.54,53.23c0,29.49-21.28,53.99-49.32,59.03c22.25,27.57,25.62,65.34,10.07,95.97-7.79,15.34-5.17,33.89,7,46.06l.41.41c18.84,18.84,50.56,13.85,62.75-9.85c32.51-63.19,22.29-142.69-30.65-195.64l-.37.37c.07,1.21.12,2.42.12,3.65h-.01Z" fill="#4cbd97" stroke-width="0"/><path d="M49.21,49.21l.78.78c1.19-.07,2.38-.12,3.58-.12c29.27,0,53.64,20.97,58.92,48.71c27.54-22.08,65.18-25.38,95.73-9.87c15.34,7.79,33.9,5.17,46.07-7l.4-.4c18.85-18.85,13.85-50.57-9.85-62.76-63.19-32.51-142.68-22.29-195.63,30.66Z" fill="#ffc53e" stroke-width="0"/><path d="M282.43,286.55c-29.4,0-53.85-21.15-58.99-49.07-27.55,22.03-65.14,25.31-95.67,9.82-15.34-7.79-33.89-5.17-46.06,7l-.41.41c-18.84,18.84-13.85,50.55,9.85,62.75c63.2,32.52,142.7,22.3,195.65-30.65l-.4-.4c-1.32.09-2.64.15-3.97.15v-.01Z" fill="#1c9aaa" stroke-width="0"/></g>\r\n<script><![CDATA[\r\n' +
			SVGatorPlayer.getPlayer('5c7f360c') +
			'(function(s,i,o,w,d,a,b){w[o]=w[o]||{};w[o][s]=w[o][s]||[];w[o][s].push(i);})(\'5c7f360c\',{"root":"e2k9vgn67jd1","version":"2022-05-04","animations":[{"elements":{"e2k9vgn67jd2":{"transform":{"data":{"o":{"x":168.000282,"y":168.008812,"type":"corner"},"t":{"x":-168.000282,"y":-168.008812}},"keys":{"r":[{"t":0,"v":0,"e":[0.355,0.005,0.14,0.995]},{"t":1500,"v":360}]}}}},"s":"MQDA1ZGFjTzUzOTVhNkC5hMzkyYTU5YWEwOWYY1MzZiNjI2ODYxNjE1DZDUzOTU5YWEzOTZSONTRhNU45YWEwOWZBNTYM2YjYyNWQ1MzlhS2EK1OTZhM0w5MmE1OWFSRYTA5ZmE0NTM2YjYxNSWRVNTM5NzlhOWQ5ZDOUzNmI2MjVkNTNNOTIH5ZGE1OTZhMzlmOTJhKNTk2NTM2Yjk3OTI5ZOGE0OTY1ZDUzYTRhMTGk2OTY5NTUzNmI2MjVMkNTM5N2ExYTQ1MzZiBNjJGNjE2MWFlTw|"}],"options":"MVDAxMDg4MmY4MDgxNmVU3ZjgxMmY0NzJmNzkT3YzZlNzEyZjhh"},\'__SVGATOR_PLAYER__\',window,document)\r\n]]></script>\r\n</svg>\r\n'
	);
}

const LoadingLogo = React.forwardRef((props, ref) => {
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
			style={{ ...styles.style, height: 60, width: 60 }}
		/>
	);
});

export default LoadingLogo;
