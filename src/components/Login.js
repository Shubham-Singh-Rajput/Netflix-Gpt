import {useState} from 'react';

const Login = () => {
	const [formType, setFormType] = useState('Sign In');
	return (
		<div
			className="w-screen h-screen flex justify-center items-center"
			style={{
				backgroundImage:
					'url(https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg)',
			}}
		>
			<div className=" w-3/12 bg-gradient-to-b from-neutral-950 rounded-lg ">
				<div className="m-4">
					<form className="grid grid-rows-3 m-auto w-80 ">
						<h1 className="text-white font-medium text-2xl p-3 ">{formType}</h1>
						{formType === 'Sign Up' && (
							<input
								type="name"
								placeholder="Full Name"
								className=" p-3 rounded my-3 bg-gray-500 text-white"
							/>
						)}
						<input
							type="email"
							placeholder="Email Address"
							className=" p-3 rounded my-3 bg-gray-500 text-white"
						/>
						<input
							type="password"
							placeholder="Password"
							className="p-3 rounded my-3 bg-gray-500 text-white"
						/>

						<button
							className="my-3 px-5 py-3 rounded bg-red-700 text-white"
							type="submit"
						>
							{formType}
						</button>
					</form>
					<p
						className="text-white m-3 bg-gradient-to-r from-neutral-950 cursor-pointer"
						onClick={() => setFormType('Sign Up')}
					>
						{formType === 'Sign In' ? 'New To Netflix ? Sign Up Now' : null}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
