import API from "./API";

function checkin(formData: FormData) {
	return API.post('checkin', formData, {
		headers: {
			"Content-Type": "multipart/form-data"
		}
	});
}

export { checkin };
