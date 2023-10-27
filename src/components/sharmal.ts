export const sharmal: string = `
	<div class="w-full h-full py-10 bg-slate-900/80 flex items-center justify-center flex-col">
		<h3 class="md:text-4xl text-3xl font-bold text-yellow-200 text-center uppercase pb-6">Birth Date</h3>

		<div class="flex items-center justify-center">
			<form action="/#zodiac-sign">
				<div class="bg-transparent border-2 border-slate-400 md:w-[30rem] w-[95%] h-[3rem] flex rounded-full overflow-hidden">
					<input
						name"zodiac"
						id="date-input"
						placeholder="mm-dd-yyyy"
						type="text"
						autocomplete="off"
						class="md:w-full w-full h-full rounded-full outline-none px-4 text-white bg-transparent">
					</input>

					<button
					type="submit"
					id="date-submit"
					class="min-w-fit px-6 flex-1 bg-yellow-200 rounded-full hover:bg-yellow-400 transition-all duration-2"
					>
						ရှာမယ်
					</button>
				</div>
				<p id="date-error" class="text-red-600 px-4"></p>
			</form>

		</div>
	</div>
`