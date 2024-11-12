import { useEffect, useState } from "react";

function ItemDetails(props) {
	return (
		<>
			<div className="flex-col ml-4">
				<h2 className="text-xl">{props.item.name}</h2>
				<h4 className="text-lg text-[#554F4F] opacity-[54%]">
					{props.item.quantity} <span>{props.item.unit}</span>
				</h4>
				<h4 className="text-sm text-[#554F4F] opacity-[40%]">
					{props.item.added_on}
				</h4>
			</div>
		</>
	)
}

function Card(props) {

	const [data, setData] = useState(props.data)
	const [deleted, setDelete] = useState(false)


	const handleDelete = () => {
		fetch(`http://localhost:8000/delete/${data.id}/`, {
			method: 'DELETE'
		}).then(() => {
			setData(props.data)
			props.fetchData()
			setDelete(true)
		})
		.catch((error) => console.error('Error:', error));
	}

	const [avatar, setAvatar] = useState(data.img_url)
	useEffect(() => {
		setAvatar(data.img_url)
	}, [data.img_url])
	return (
		!deleted ?
			<div className="static ">
				<div className="flex mx-auto rounded-[14px] h-[140px] mt-4 w-[400px] bg-[#f2f2f2]
					border-[0.5px] border-[#B4B4B4] drop-shadow-md	p-8  ">
					<span className="absolute top-[-10px] right-[-8px] cursor-pointer hover:rotate-90 transition-transform"
						onClick={handleDelete}>
						<img src="src/assets/close.png" className="w-6"></img>
					</span>
					<div className="flex">
						<img onError={() => {
							setAvatar('https://www.contentviewspro.com/wp-content/uploads/2017/07/default_image.png')
						}} src={avatar} alt="image" className="rounded-lg w-20 object-cover" />
						<ItemDetails item={data} />
					</div>
				</div>
			</div> :
			null
	)
}

export default Card;
