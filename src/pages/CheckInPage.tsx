import { useState } from "react";
import { checkin } from "../services";
import { useAPI } from "../utils";

function CheckInPage() {

	const [file, setFile] = useState<File>();
	const { trigger: doCheckIn, isLoading, error } = useAPI(checkin);

	const handleCheckin = () => {
		if (!file) return;

		const formData = new FormData();
		formData.append('file', file);
		doCheckIn(formData).subscribe((res) => console.log(res));
	}

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFile(() => event.target.files?.[0]);
	}

	return (
		<>
			<h1>Check-in</h1>
			{ error }
			<div>
				<input type="file" onChange={handleFileChange}/>
				<button onClick={handleCheckin} disabled={!file || isLoading}>
					{ isLoading ? 'Checking in...' : 'Check in' }
				</button>
			</div>
		</>
	)
}

export default CheckInPage;
