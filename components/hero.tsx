'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FastArrowRight, Phone } from 'iconoir-react';
import { HeroBrand } from './hero-brand';

export function Hero() {
	const [isRevealed, setIsRevealed] = useState(false);

	return (
		<section id='top' className='relative w-full bg-black pt-16 md:pt-20'>
			<div className='relative h-[calc(100svh-4rem)] w-full overflow-hidden md:h-[calc(100svh-5rem)]'>
				<Image
					src='/hero-mobile.png'
					alt='Bannière 89 Factory'
					fill
					priority
					quality={85}
					sizes='100vw'
					onLoadingComplete={() => setIsRevealed(true)}
					className={`object-cover md:hidden transition-opacity duration-700 ease-out motion-reduce:transition-none ${isRevealed ? 'opacity-100' : 'opacity-0'
						}`}
				/>
				<Image
					src='/hero3.png'
					alt='Bannière 89 Factory'
					fill
					priority
					quality={85}
					sizes='100vw'
					onLoadingComplete={() => setIsRevealed(true)}
					className={`hidden object-contain md:block transition-opacity duration-700 ease-out motion-reduce:transition-none ${isRevealed ? 'opacity-100' : 'opacity-0'
						}`}
				/>

				{/* <HeroBrand isRevealed={isRevealed} /> */}

				<div
					className={`absolute bottom-10 left-6 right-6 z-10 flex flex-col gap-3 sm:left-10 sm:right-auto sm:flex-row sm:items-center md:left-1/2 md:right-auto md:-translate-x-1/2 md:justify-center transition-all duration-700 ease-out motion-reduce:transition-none ${isRevealed
						? 'opacity-100 translate-y-0'
						: 'opacity-0 translate-y-4 pointer-events-none'
						}`}
				>
					<a
						href='tel:+3360000000'
						className='group inline-flex items-center justify-center gap-3 rounded-lg bg-pink-dark px-7 py-3.5 font-black tracking-wider text-ui-white shadow-lg transition-colors hover:bg-brand-purple-soft focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-light/70'
					>
						<Phone className='h-5 w-5' />
						<span>COMMANDER MAINTENANT</span>
					</a>

					<Link
						href='#menu'
						className='group inline-flex items-center justify-center gap-2 rounded-lg border-2 border-pink-light bg-black/30 px-7 py-3.5 font-black tracking-wider text-pink-light shadow-lg backdrop-blur-sm transition-colors hover:bg-pink-dark hover:text-ui-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-light/70'
					>
						<span>VOIR LE MENU</span>
						<FastArrowRight className='h-5 w-5 transition-transform group-hover:translate-x-1' />
					</Link>
				</div>
			</div>
		</section>
	);
}
