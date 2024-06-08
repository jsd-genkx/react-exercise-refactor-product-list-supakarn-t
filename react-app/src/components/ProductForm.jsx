// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";

// ต้องมีที่เก็บค่าที่รับ input เข้ามาก่อน
// ปั้นเป็นก้อนแล้วส่งเข้า product list

// let countId = 2;

function ProductForm({ setProductList }) {
	const [countId, setCountId] = useState(2);

	// create state for store variable
	const [product, setProduct] = useState({
		id: `pid-${countId}`,
		name: "",
		price: 0,
		image: "",
		isSelected: false,
	});

	// update value of product
	const inputChange = (event) => {
		// shorthand of event.target.name , event.target.value
		const { name, value } = event.target;

		// reassign value of product
		setProduct((prevData) => {
			return {
				...prevData, // ถ้าไม่มี product จะมีแค่ค่าของ input ที่อัพเดทล่าสุด
				[name]: value,
			};
		});
	};

	// sent product to product list
	const submitForm = (event) => {
		event.preventDefault();

		setCountId((prevCountId) => {
			const newCountId = prevCountId + 1;

			setProduct((prevProduct) => ({
				...prevProduct,
				id: `pid-${newCountId}`,
			}));

			setProductList((prevList) => [
				...prevList,
				{
					...product,
					id: `pid-${newCountId}`,
				},
			]);

			return newCountId; // เอาไว้อัพเดตค่าเข้า countId
		});
	};

	return (
		<section
			id="inputForm"
			className="bg-sky-50 border border-sky-300 w-full lg:w-96 p-6 h-fit rounded-xl"
		>
			<h2>Add Product</h2>

			<form id="form" onSubmit={submitForm} className="flex lg:flex-col gap-3">
				<label className="text-xl">
					Product name
					<input
						type="text"
						name="name"
						autoComplete="off"
						onChange={inputChange}
						required
						className="w-full p-1 px-3 border border-neutral-300 rounded"
					/>
				</label>

				<label className="text-xl">
					Price
					<input
						type="number"
						step="0.01"
						min="0.01"
						name="price"
						onChange={inputChange}
						required
						className="w-full p-1 px-3 border border-neutral-300 rounded"
					/>
				</label>

				<label className="text-xl">
					Image Url
					<input
						type="url"
						name="image"
						onChange={inputChange}
						required
						className="w-full p-1 px-3 border border-neutral-300 rounded"
					/>
				</label>

				<p id="inputError" className="text-red-500 font-bold"></p>

				<div className="flex w-1/3 lg:w-full gap-2">
					<button
						type="submit"
						className="bg-blue-500 text-white w-full p-3 hover:bg-blue-700"
					>
						<i className="fa-solid fa-plus"></i>
						Create Product
					</button>
					<button
						type="reset"
						className="bg-red-500 text-white w-full p-3 hover:bg-red-700"
					>
						<i className="fa-solid fa-rotate-right"></i>
						Reset
					</button>
				</div>
			</form>
		</section>
	);
}

ProductForm.propTypes = {
	productList: PropTypes.array,
	setProductList: PropTypes.func,
};

export default ProductForm;
