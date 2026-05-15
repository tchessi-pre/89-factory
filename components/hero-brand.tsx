export function HeroBrand({ isRevealed }: { isRevealed: boolean }) {
	return (
		<div
			className={`absolute top-6 left-1/2 z-10 hidden w-[min(22rem,92vw)] -translate-x-1/2 text-center transition-all duration-700 ease-out motion-reduce:transition-none md:block ${isRevealed
				? 'opacity-100 translate-y-0'
				: 'opacity-0 -translate-y-2'
				}`}
		>
			<div className='mx-auto h-[10px] w-full bg-transparent border-[3px] border-ui-white/85 shadow-[0_0_14px_rgba(255, 255, 255, 1)] rounded-full' />
			<h1 className='mt-3 text-3xl sm:text-5xl font-black uppercase tracking-[0.12em] [paint-order:stroke_fill]'>
				<span className='text-transparent [-webkit-text-stroke:3px_rgba(255,64,198,0.98)] [text-shadow:0_0_9px_rgba(255,255,255,0.6),0_0_14px_rgba(255,64,198,0.75),0_0_28px_rgba(255,64,198,0.55),0_0_50px_rgba(183,0,255,0.45)]'>
					89
				</span>
				<span className='text-ui-white [text-shadow:0_2px_22px_rgba(0,0,0,0.75)] font-bold'>
					FACTORY
				</span>
			</h1>
			<div className='mx-auto mt-3 h-[10px] w-full bg-transparent border-[3px] border-ui-white/85 shadow-[0_0_14px_rgba(255,255,255,0.25)] rounded-2xl' />
		</div>
	);
}
