'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { MenuCategory } from './menu-category';
import {
	PizzaSlice as BurgerIcon,
	CoffeeCup,
	Leaf,
	FireFlame as Flame,
} from 'iconoir-react';

const categories = [
	{ id: 'all', label: 'Tout', icon: BurgerIcon },
	{ id: 'sandwich', label: 'Sandwich', icon: BurgerIcon },
	{ id: 'wrap', label: 'Wrap', icon: Leaf },
	{ id: 'tacos', label: 'Tacos', icon: Flame },
	{ id: 'extras', label: 'Extras', icon: CoffeeCup },
] as const;

const menuItems = {
	sandwich: [
		{
			name: 'Le 89',
			price: '9,90€',
			description: 'Servi avec frites et boisson.',
			image: '/burgers/beef/Cheesy-Buffalo_10,50euros.webp',
			isPopular: true,
		},
		{
			name: 'Le Steak',
			price: '9,90€',
			description: 'Servi avec frites et boisson.',
			image: '/burgers/beef/Angry-Bull_12euros.webp',
		},
		{
			name: 'Le Chicken',
			price: '9,90€',
			description: 'Servi avec frites et boisson.',
			image: '/burgers/chicken/Chrunchy-Chicken_8,50euros.webp',
		},
		{
			name: 'Le Tandoori',
			price: '9,90€',
			description: 'Servi avec frites et boisson.',
			image: '/burgers/chicken/Mexican-Cracker_11euros.webp',
		},
	],
	wrap: [
		{
			name: 'Le Tenders',
			price: '8,90€',
			description: 'Wrap servi avec frites et boisson.',
			image: '/Fried-Chicken/Chicken-Stripes.webp',
		},
		{
			name: 'Le Steak',
			price: '8,90€',
			description: 'Wrap servi avec frites et boisson.',
			image: '/burgers/beef/Smookie-Beefy-BBQ_13euros.webp',
		},
		{
			name: 'Le Mini Wrap',
			price: '3,00€',
			description: 'Mini wrap (tenders ou steak).',
			image: '/Appetizers/Mozarella-Sticks.webp',
		},
	],
	tacos: [
		{
			name: '1 viande',
			price: '6,50€',
			description:
				'Choix de viandes : Escalope, Nuggets, Tenders, Steak, Cordon Bleu.',
			image: '/burgers/beef/Blazing-Nacho-Beef_13euros.webp',
		},
		{
			name: '2 viandes',
			price: '8,00€',
			description:
				'Choix de viandes : Escalope, Nuggets, Tenders, Steak, Cordon Bleu.',
			image: '/burgers/beef/Blazing-Nacho-Beef_13euros.webp',
			isPopular: true,
		},
		{
			name: '3 viandes',
			price: '10,00€',
			description:
				'Choix de viandes : Escalope, Nuggets, Tenders, Steak, Cordon Bleu.',
			image: '/burgers/beef/Blazing-Nacho-Beef_13euros.webp',
		},
	],
	extras: [
		{
			name: 'Supplément gratinage',
			price: '+1,50€',
			description: 'Au choix : Emmental, Raclette, Chèvre.',
			image: '/graphics/mix of spices and dips.svg',
		},
		{
			name: 'Bacon',
			price: '+1,00€',
			description: 'Ajout extra.',
			image: '/graphics/dips.svg',
		},
		{
			name: 'Œuf',
			price: '+1,00€',
			description: 'Ajout extra.',
			image: '/graphics/dips.svg',
		},
		{
			name: 'Boursin',
			price: '+1,00€',
			description: 'Ajout extra.',
			image: '/graphics/dips.svg',
		},
		{
			name: 'Cheddar',
			price: '+1,00€',
			description: 'Ajout extra.',
			image: '/graphics/dips.svg',
		},
		{
			name: 'Chèvre',
			price: '+1,00€',
			description: 'Ajout extra.',
			image: '/graphics/dips.svg',
		},
		{
			name: 'Viandes disponibles',
			description:
				'Escalope, Nuggets, Tenders, Steak, Cordon Bleu.',
			image: '/graphics/cow.svg',
		},
	],
};

export function MenuSection() {
	type CategoryId = (typeof categories)[number]['id'];
	const [activeCategory, setActiveCategory] = useState<CategoryId>('sandwich');
	const allItems = Object.values(menuItems).flat();
	const tabButtonRefs = useRef<Partial<Record<CategoryId, HTMLButtonElement | null>>>(
		{}
	);
	const touchStartRef = useRef<{ x: number; y: number } | null>(null);

	const selectCategory = (id: CategoryId) => {
		setActiveCategory(id);
		window.requestAnimationFrame(() => {
			tabButtonRefs.current[id]?.scrollIntoView({
				behavior: 'smooth',
				inline: 'center',
				block: 'nearest',
			});
		});
	};

	const handleTabsTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
		const touch = e.touches[0];
		if (!touch) return;
		touchStartRef.current = { x: touch.clientX, y: touch.clientY };
	};

	const handleTabsTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
		const start = touchStartRef.current;
		touchStartRef.current = null;
		if (!start) return;

		const touch = e.changedTouches[0];
		if (!touch) return;

		const dx = touch.clientX - start.x;
		const dy = touch.clientY - start.y;

		if (Math.abs(dx) < 50) return;
		if (Math.abs(dx) < Math.abs(dy)) return;

		const direction = dx < 0 ? 1 : -1;
		const index = categories.findIndex((c) => c.id === activeCategory);
		const nextIndex = (index + direction + categories.length) % categories.length;
		selectCategory(categories[nextIndex].id);
	};

	return (
		<section
			id='menu'
			className='relative py-20 md:py-32 overflow-hidden'
		>
			{/* <div className='absolute -top-24 -left-24 w-80 h-80 bg-pink-dark/20 rounded-full blur-3xl' /> */}
			<div className='absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.6)_1px,transparent_0)] [background-size:18px_18px]' />

			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

				{/* Section title */}
				<div className='text-center mb-12'>
					<h2
						className='text-6xl md:text-8xl font-black uppercase text-white tracking-tight mb-3'
						style={{ textShadow: '4px 4px 0 rgba(0,0,0,0.25)' }}
					>
						NOTRE CARTE
					</h2>
					<div className='flex items-center justify-center gap-4'>
						<span className='h-px flex-1 max-w-[8rem] bg-white/30' />
						<p className='text-white/70 text-sm font-semibold uppercase tracking-[0.2em]'>
							Sandwichs • Wraps • Tacos
						</p>
						<span className='h-px flex-1 max-w-[8rem] bg-white/30' />
					</div>
				</div>

				{/* Deal Banner */}
				<div className='mb-12'>
					<div className='relative bg-ui-white/95 backdrop-blur-sm rounded-3xl border-[3px] border-brand-purple shadow-[10px_10px_0_rgba(0,0,0,0.22)] overflow-hidden'>
						<div className='absolute inset-0 bg-gradient-to-br from-ui-white/15 via-ui-white/0 to-brand-purple-soft/10' />
						<div className='relative bg-brand-purple px-6 md:px-8 py-3.5 flex flex-wrap items-center gap-4'>
							<span className='text-3xl md:text-4xl font-black uppercase text-white tracking-wide'>
								MENU DU JOUR
							</span>
							<div className='h-px flex-1 min-w-8 bg-white/20' />
							<span className='text-white/60 text-xs font-semibold uppercase tracking-[0.2em]'>
								Sandwich • Frites • Boisson
							</span>
						</div>
						<div className='relative px-6 md:px-8 py-6'>
							<div className='grid gap-5 md:grid-cols-[18rem_1fr] md:items-center'>
								<div className='relative mx-auto h-44 w-[18rem] sm:h-52 sm:w-[22rem] md:mx-0 md:h-48 md:w-[18rem]'>
									<Image
										src='/burger-menu-banierre.png'
										alt=''
										fill
										quality={85}
										sizes='(max-width: 640px) 288px, (max-width: 1024px) 352px, 288px'
										className='object-cover drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]'
									/>
								</div>
								<div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
									<p className='text-brand-purple/80 text-lg sm:text-xl max-w-xl'>
										Profite de la formule complète : un sandwich au choix, des frites et une boisson.
									</p>
									<div className='bg-brand-purple text-white rounded-xl px-5 py-2.5 inline-flex items-start leading-none shrink-0 shadow-[0_18px_40px_rgba(75,31,74,0.33)] ring-1 ring-white/15'>
										<span className='text-5xl md:text-7xl font-black'>9</span>
										<span className='flex flex-col text-base font-black ml-0.5 mt-1 leading-tight'>
											<span>€</span>
											<span>90</span>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Category Tabs */}
				<div className='mb-10 flex justify-center'>
					<div
						className='inline-flex items-center gap-2 rounded-2xl bg-ui-white/10 backdrop-blur-md border border-ui-white/10 p-2 shadow-[0_18px_55px_rgba(0,0,0,0.25)] overflow-x-auto max-w-full touch-pan-x overscroll-x-contain'
						role='tablist'
						aria-label='Catégories du menu'
						onTouchStart={handleTabsTouchStart}
						onTouchEnd={handleTabsTouchEnd}
					>
						{categories.map((category) => {
							const Icon = category.icon;
							const isActive = activeCategory === category.id;
							return (
								<button
									key={category.id}
									ref={(el) => {
										tabButtonRefs.current[category.id] = el;
									}}
									onClick={() => selectCategory(category.id)}
									type='button'
									role='tab'
									aria-selected={isActive}
									className={`group relative inline-flex items-center gap-2.5 px-5 md:px-6 py-3 rounded-xl text-sm md:text-base font-black uppercase tracking-wide whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${isActive
										? 'bg-ui-white text-brand-purple shadow-[0_16px_40px_rgba(0,0,0,0.25)]'
										: 'text-ui-white/85 hover:text-ui-white hover:bg-ui-white/10'
										}`}
								>
									<span
										className={`absolute inset-0 rounded-xl ring-1 transition-opacity ${isActive
											? 'ring-brand-purple/20 opacity-100'
											: 'ring-ui-white/10 opacity-100 group-hover:opacity-100'
											}`}
									/>
									<Icon
										className={`relative z-10 w-5 h-5 md:w-6 md:h-6 ${isActive ? 'text-brand-purple' : 'text-pink-light'
											}`}
									/>
									<span className='relative z-10'>{category.label}</span>
								</button>
							);
						})}
					</div>
				</div>

				{/* Menu Items */}
				<div
					key={activeCategory}
					className='animate-in fade-in-0 duration-500 ease-out'
				>
					<MenuCategory
						items={
							activeCategory === 'all'
								? allItems
								: menuItems[activeCategory as keyof typeof menuItems]
						}
					/>
				</div>
			</div>
		</section>
	);
}
