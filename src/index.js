import React from 'react';
import ReactDOM from 'react-dom';
import Stream from './components/Stream';

const tracks = [
	{
		title: 'Some Track'
	},
	{
		title: 'Some other Track'
	}
];

ReactDOM.render(
	<Stream tracks={tracks} />,
  document.getElementById('app')
	);