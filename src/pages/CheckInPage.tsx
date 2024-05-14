import { useRef, useState } from "react";
import { checkin } from "../services";
import { useAPI } from "../utils";

function CheckInPage() {

	const [file, setFile] = useState<File>();
	const [preview, setPreview] = useState<string>();
	const { trigger: doCheckIn, isLoading, error } = useAPI(checkin);
	const fileChooser = useRef<HTMLInputElement>(null);

	const handleCheckin = () => {
		if (!file) return;

		const formData = new FormData();
		formData.append('file', file);
		doCheckIn(formData).subscribe((res) => console.log(res));
	}

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = event.target.files?.[0];
		if (!selectedFile) {
			setPreview(undefined);
		} else {
			const objUrl = URL.createObjectURL(selectedFile);
			setPreview(() => objUrl);
		}
		setFile(() => selectedFile);
	}

	return (
		<>
			{ error }
			<div className="w-full flex items-center justify-center flex-col mt-16 gap-12">
				{ file 
					? <div className="flex flex-col gap-4 items-center">
						<img className="w-[256px]" src={preview} alt="preview"/>
						<h2>{ file.name }</h2>
					</div>
					: <div 
						className="w-[256px] h-[256px] flex items-center justify-center bg-slate-300 text-slate-500"
					>
						<p>Image preview</p>
					</div>
				}
				<div className="w-[256px] flex justify-between">
					<label htmlFor="image-select">
						<button 
							className="bg-black text-white p-2 px-4"
							onClick={() => fileChooser?.current?.click()}
						>Choose image</button>
					</label>
					<input className="hidden" ref={fileChooser} id="image-select" type="file" onChange={handleFileChange}/>
					<button 
						className="bg-violet-800 text-white p-2 px-4"
						onClick={handleCheckin} disabled={!file || isLoading}
					>
						{ isLoading ? 'Checking in...' : 'Check in' }
					</button>
				</div>
			</div>
		</>
	)
}

export default CheckInPage;
