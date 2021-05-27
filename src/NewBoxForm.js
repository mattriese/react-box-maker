import React, { useState } from "react";

function NewBoxForm({ addBox }) {

//const initialState = { height: "", width: "", color: ""};
const [formData, setFormData] = useState({});

// function: eventhandler for subitting form, calls the function that is passed in as a prop
function handleSubmit(evt) {
	evt.preventDefault();
	addBox(formData);
	setFormData({ height: "", width: "", color: ""});
}

// function to update local state with curr state of input elem
function handleChange(evt) {
	const { name, value } = evt.target;
	setFormData(fData => ({
		...fData,
		[name]: value,
	}));
}

// render a form: width, height, color for new box
return (
	<form onSubmit={handleSubmit}>
		<label htmlFor="height">Height:</label>
		<input type="text"
					id="height"
					name="height"
					value={formData.height}
					onChange={handleChange}
					/>
		<br/>
		<label htmlFor="width">Width:</label>
		<input type="text"
					id="width"
					name="width"
					value={formData.width}
					onChange={handleChange}
					/>
		<br/>
		<label htmlFor="color">Color:</label>
		<input type="text"
					id="color"
					name="color"
					value={formData.color}
					onChange={handleChange}
					/>
		<br/>
		<button>Add a new Box</button>
	</form>
)
}

export default NewBoxForm;
