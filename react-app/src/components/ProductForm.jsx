// eslint-disable-next-line no-unused-vars
import React from "react";

function ProductForm() {
	return (
		<section
			id="inputForm"
			className="bg-sky-50 border border-sky-300 w-full lg:w-96 p-6 h-fit rounded-xl"
		>
			<h2>Add Product</h2>

			<form id="form" className="flex lg:flex-col gap-3">
				<label className="text-xl">
					Product name
					<input
						type="text"
						name="productName"
						autoComplete="off"
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
						required
						className="w-full p-1 px-3 border border-neutral-300 rounded"
					/>
				</label>

				<label className="text-xl">
					Image Url
					<input
						type="url"
						name="image"
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

export default ProductForm;
