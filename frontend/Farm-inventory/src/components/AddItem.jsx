import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Wrap from './wrap';

function AddItem() {
	const navigate = useNavigate()

	const [name, setName] = useState('')
	const [quantity, setQuantity] = useState('')
	const [unit, setUnit] = useState('Kg')
	const [img_url, setImage] = useState('')

	const handleName = (e) => { setName(e.target.value); }
	const handleQuantity = (e) => setQuantity(e.target.value)
	const handleUnit = (e) => setUnit(e.target.value)
	const handleImage = (e) => setImage(e.target.value)

	const [notification, setNotification] = useState(false);


	const handleSubmit = async (e) => {
		e.preventDefault()
		const data = { name, quantity, unit, img_url }
		console.log(data);

		const response = await fetch('http://localhost:8000/addItem/', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		}).then(() => {
			setNotification(true);
			setTimeout(() => {
				setNotification(false);
				navigate('/')
			}, 3000);
			setName('');
			setQuantity('');
			setImage('');
		})
			.catch((error) => console.error('Error:', error));
	}

	return (
		<>
			<div className="py-12 flex-col">
				<h1 className="flex justify-center text-[62px]">Add item</h1>

				<form onSubmit={handleSubmit} className='flex justify-center w-full'>
					<div>
						<div className='flex mt-8 justify-between items-center'>
							<label className='font-bold mr-12 w-[30%]' htmlFor="name">Name</label>
							<input className='drop-shadow-sm rounded-md bg-[#D9D9D9] pl-3 py-1 w-[290px]' placeholder='Name of item' type="text" name="name"
								onChange={handleName} value={name} required />
						</div>

						<div className='flex mt-8 justify-between items-center'>
							<label className='font-bold mr-12 w-[30%]' htmlFor="quantity">Quantity</label>
							<input className='drop-shadow-sm rounded-md bg-[#D9D9D9] pl-3 py-1 w-[290px]' min={0} placeholder='quantity' type="number" name="quantity"
								onChange={handleQuantity} value={quantity} required />
						</div>

						<div className='flex mt-8 justify-between items-center'>
							<label className='font-bold mr-12 w-[30%]' htmlFor="quantity">Link to image</label>
							<input className='drop-shadow-sm rounded-md bg-[#D9D9D9] pl-3 py-1 w-[290px]' placeholder='Enter a valid image address..' type="text" name="url"
								onChange={handleImage} value={img_url} maxLength={255} />
						</div>

						<div className='flex mt-8 justify-between items-center'>
							<label className='font-bold mr-12 w-[30%]' htmlFor="unit">Unit</label>
							<select name="cars" className='drop-shadow-sm rounded-md bg-[#D9D9D9] pl-3 py-1 w-[290px]' onChange={handleUnit}>
								<option value="kg">Kg</option>
								<option value="Liters">Liters</option>
								<option value="units">units</option>
								<option value="G">G</option>
							</select>
						</div>
						<button type='submit' className='w-full mt-6 rounded-md drop-shadow-sm  bg-[#D9D9D9] pl-3 py-1'>Add</button>


					</div>


				</form>


				{/* Notification Popup */}
				{notification && (
					<div style={popupStyle}>
						Data sent successfully! Redirecting ...
					</div>
				)}



			</div>
		</>
	)
}
const popupStyle = {
	position: 'fixed',
	top: '20px',
	right: '20px',
	backgroundColor: '#4caf50', // Green background
	color: 'white',
	padding: '10px 20px',
	borderRadius: '5px',
	boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
	zIndex: 1000,
};

export default AddItem;
