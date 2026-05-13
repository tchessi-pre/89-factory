'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDown, FastArrowRight, Phone } from 'iconoir-react';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
	const [showContent, setShowContent] = useState(false);
	const hasRevealedRef = useRef(false);

	const reveal = () => {
		if (hasRevealedRef.current) return;
		hasRevealedRef.current = true;
		window.setTimeout(() => setShowContent(true), 3000);
	};

	useEffect(() => {
		const timeoutId = window.setTimeout(() => {
			setShowContent(true);
		}, 5000);

		return () => window.clearTimeout(timeoutId);
	}, []);

	return (
		<section
			id='top'
			className='relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black'
		>
			<video
				className='absolute inset-0 w-full h-full object-cover'
				src='/cheeseburger-with-steaming-patty-and-fresh.mp4'
				autoPlay
				muted
				loop
				playsInline
				onPlaying={reveal}
				onCanPlay={reveal}
			/>
			<div className='absolute inset-0 bg-brand-purple/20' />
			{/* Decorative Elements */}
			<div className='absolute top-1/4 left-10 w-64 h-64 bg-pink-dark/20 rounded-full blur-3xl animate-pulse' />
			<div className='absolute bottom-1/4 right-10 w-80 h-80 bg-food-orange/20 rounded-full blur-3xl animate-pulse' />
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-purple-soft/15 rounded-full blur-3xl' />

			<div
				className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
					showContent
						? 'opacity-100 translate-y-0'
						: 'opacity-0 translate-y-4 pointer-events-none'
				}`}
			>
				<div className='flex flex-col items-center text-center'>
					<div className='w-full max-w-3xl'>

						<div className='flex items-center justify-center mb-1'>
							<Image
								src='/89factory-logo.png'
								alt='89 Factory'
								width={900}
								height={600}
								priority
								className='w-64 sm:w-80 md:w-[520px] h-auto'
							/>
						</div>

						{/* Tagline */}
						<p
							className='text-lg sm:text-6xl md:text-7xl italic font-black text-white tracking-tighter mb-4 relative 
  [text-shadow:0_0_8px_#fff,0_0_20px_#fff,0_0_40px_#b700ff,0_0_80px_#b700ff,0_0_120px_#b700ff]
  after:absolute after:inset-0 after:bg-gradient-to-r after:from-cyan-400 after:to-purple-500 after:bg-clip-text after:text-transparent after:[text-shadow:none] after:mix-blend-overlay'
						>
							Ici c&apos;est Marseille
						</p>

						{/* Description */}
						<p className='text-base sm:text-lg text-ui-white/80 max-w-xl mx-auto mb-10 leading-relaxed'>
							Burgers halal premium, fried chicken croustillant et currywurst
							authentique
						</p>

						{/* CTA Buttons */}
						<div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-8'>
							<a
								href='tel:+3360000000'
								className='group flex items-center gap-3 px-8 py-4 bg-purple-gradient text-ui-white font-bold tracking-wider rounded-lg hover:bg-brand-purple-soft transition-colors shadow-2xl shadow-black/30 w-full sm:w-auto justify-center'
							>
								<Phone className='w-5 h-5' />
								+33 06 00 00 00 00
							</a>
							<Link
								href='#menu'
								className='group flex items-center gap-2 px-8 py-4 border-2 border-pink-light text-pink-light font-bold tracking-wider rounded-lg hover:bg-pink-dark hover:border-pink-dark hover:text-ui-white transition-colors w-full sm:w-auto justify-center'
							>
								VOIR LE MENU
								<FastArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
							</Link>
						</div>

						{/* Stats */}
						<div className='grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto md:mx-0'>
							<div className='text-center md:text-left'>
								<p className='text-2xl sm:text-3xl md:text-4xl font-bold text-white'>
									11+
								</p>
								<p className='text-xs sm:text-sm text-ui-white/70 tracking-wide'>
									BURGERS
								</p>
							</div>
							<div className='text-center md:text-left'>
								<p className='text-2xl sm:text-3xl md:text-4xl font-bold text-white'>
									10+
								</p>
								<p className='text-xs sm:text-sm text-ui-white/70 tracking-wide'>
									SAUCES
								</p>
							</div>
							<div className='text-center md:text-left'>
								<p className='text-2xl sm:text-3xl md:text-4xl font-bold text-white'>
									100%
								</p>
								<p className='text-xs sm:text-sm text-ui-white/70 tracking-wide'>
									HALAL
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Scroll Indicator */}
				<div className='absolute -bottom-8 left-1/2 -translate-x-1/2 animate-bounce'>
					<ArrowDown className='w-6 h-6 text-pink-light' />
				</div>
			</div>
		</section>
	);
}
