import { useEffect, useState } from 'react';
import Card from './Card'

function Wrap() {
	const [data, setData] = useState([]);
	const fetchData = () => {
		fetch('http://localhost:8000/itemsList/')
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => console.error('Error fetching data:', error));
	}


	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="py-12 flex-col">
			<h1 className="flex justify-center text-[62px]">List of items</h1>
			{data.length === 0 ? <h2 className='mt-12 opacity-50 text-center'>Nothing to show</h2> :
				<>
					{data.map((item) => (<Card fetchData={fetchData} key={item.id} data={item} />))}
				</>
			}
		</div>
	)
}

export default Wrap;
