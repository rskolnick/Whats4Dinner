import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
	return (
		<div className='flex gap-x-5'>
			<p className='text-3xl font-bold text-indigo-500'>
				Hello Discord Clone
			</p>
			<Button>Click</Button>
		</div>
	);
}
