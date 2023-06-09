import React from 'react';
import { useState } from 'react';

const Dragdrop = () => {
	const handleDrag = (e: React.DragEvent, item: string) => {
		e.dataTransfer.setData('text', item);
	};

	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault();
	};

	const handleDrop = (e: React.DragEvent) => {
		e.preventDefault();
		const data = e.dataTransfer.getData('text');
		setDrag(data);
	};
	const [drag, setDrag] = useState<string>('');

	return (
		<div className='drop-grid'>
			<div className='drag-item'>
				<p draggable='true' onDragStart={(e) => handleDrag(e, 'DRAG ME')}>
					DRAG ME
				</p>
			</div>
			<div className='drag-container'>
				<h4>Drop zone</h4>
				<div
					className='drop-zone'
					onDragOver={handleDragOver}
					onDrop={handleDrop}>
					{drag}
				</div>
			</div>
		</div>
	);
};

export default Dragdrop;
