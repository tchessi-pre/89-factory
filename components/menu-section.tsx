'use client';

import { useState } from 'react';
import { MenuCategory } from './menu-category';
import { SectionHeader } from './section-header';
import {
	PizzaSlice as BurgerIcon,
	CoffeeCup,
	Leaf,
	FireFlame as Flame,
} from 'iconoir-react';

const categories = [
	{ id: 'beef', label: 'Burgers bœuf', icon: BurgerIcon },
	{ id: 'chicken', label: 'Burgers poulet', icon: Flame },
	{ id: 'veggie', label: 'Végé', icon: Leaf },
	{ id: 'drinks', label: 'Boissons', icon: CoffeeCup },
];

const menuItems = {
	beef: [
		{
			name: 'Cheesy Buffalo',
			price: '10,50€',
			description:
				'Pain brioché, steak haché de bœuf maison 140 g, fromage, sauce burger, cornichon, oignon, tomates, salade',
			spiceLevel: 3,
			image: '/burgers/beef/Cheesy-Buffalo_10,50euros.webp',
		},
		{
			name: 'Angry Bull',
			price: '12,00€',
			description:
				'Pain brioché, steak haché de bœuf maison 140 g, fromage, sauce chili cheese, jalapeño, cornichon, oignon, salade',
			spiceLevel: 3,
			image: '/burgers/beef/Angry-Bull_12euros.webp',
		},
		{
			name: 'Smokie Beefy BBQ',
			price: '13,00€',
			description:
				'Pain brioché, steak haché de bœuf maison 140 g, fromage, sauce burger, cornichon, onion rings, oignons grillés, sauce BBQ, tomates, salade',
			spiceLevel: 3,
			image: '/burgers/beef/Smookie-Beefy-BBQ_13euros.webp',
		},
		{
			name: 'Blazing Nacho Beef',
			price: '13,00€',
			description:
				'Pain brioché, steak haché de bœuf maison 140 g, fromage, sauce burger, cornichon, jalapeño, nachos, sauce sriracha, tomates, salade',
			spiceLevel: 3,
			image: '/burgers/beef/Blazing-Nacho-Beef_13euros.webp',
		},
		{
			name: 'Cheese Burger',
			price: '7,00€',
			description:
				'Pain brioché, steak haché de bœuf maison 140 g, fromage, sauce burger, cornichon, oignon, tomates, salade',
			spiceLevel: 1,
			image: '/burgers/beef/Cheese-Burger_7euros.webp',
		},
	],
	chicken: [
		{
			name: 'Crunchy Chicken',
			price: '8,50€',
			description:
				'Pain brioché, lamelles de poulet, fromage, sauce burger, salade',
			spiceLevel: 2,
			image: '/burgers/chicken/Chrunchy-Chicken_8,50euros.webp',
		},
		{
			name: 'Loaded Crunchy',
			price: '9,00€',
			description:
				'Pain brioché, lamelles de poulet, fromage, sauce burger, tomates, oignon, cornichon, salade',
			spiceLevel: 2,
			image: '/burgers/chicken/Loaded-Chrunchy_9euros.webp',
		},
		{
			name: 'Crispy Ringer',
			price: '10,00€',
			description:
				'Pain brioché, lamelles de poulet, fromage, sauce burger, onion rings, oignon, tomates, salade',
			spiceLevel: 2,
			image: '/burgers/chicken/Crispy-Ringer_10euros.webp',
		},
		{
			name: 'Mexican Cracker',
			price: '11,00€',
			description:
				'Pain brioché, lamelles de poulet, fromage, sauce burger, jalapeño, cornichon, nachos, sauce sriracha, oignon, salade',
			spiceLevel: 2,
			image: '/burgers/chicken/Mexican-Cracker_11euros.webp',
		},
		{
			name: 'Flip Chicken Burger',
			price: '6,00€',
			description:
				'Pain brioché, lamelles de poulet, fromage, sauce burger, salade',
			spiceLevel: 1,
			image: '/burgers/chicken/Flip-Chicken-Burger_6euros.webp',
		},
		{
			name: 'Foodie Bomber',
			price: '13,00€',
			description:
				'Pain brioché, lamelles de poulet, fromage, nuggets chili cheese, sauce chili cheese, oignon, jalapeño, salade',
			spiceLevel: 2,
			image: '/burgers/chicken/Foodie-Bomber-13euros.webp',
		},
	],
	veggie: [
		{
			name: 'Plant Power',
			price: '9,00€',
			description:
				'Pain brioché, falafel, fromage, sauce burger, cornichon, salade, oignon, tomates',
			spiceLevel: 0,
		},
		{
			name: 'Veggie BBQ',
			price: '11,00€',
			description:
				'Pain brioché, falafel, fromage, sauce burger, cornichon, onion rings, oignons grillés, sauce BBQ, tomates, salade',
			spiceLevel: 0,
		},
	],
	drinks: [
		{
			name: 'Coca Cola',
			price: '2,50€',
			description: 'Canette 330 ml',
			image: '/graphics/cold drinks sprite cola fanta.svg',
		},
		{
			name: 'Coca Cola Zero',
			price: '2,50€',
			description: 'Canette 330 ml',
			image: '/graphics/cold drinks sprite cola fanta.svg',
		},
		{
			name: 'Fanta',
			price: '2,50€',
			description: 'Canette 330 ml',
			image: '/graphics/cold drinks sprite cola fanta.svg',
		},
		{
			name: 'Sprite',
			price: '2,50€',
			description: 'Canette 330 ml',
			image: '/graphics/cold drinks sprite cola fanta.svg',
		},
		{
			name: 'Capri Sonne',
			price: '1,50€',
			description: '200ml',
			image: '/graphics/caprisun.svg',
		},
		{
			name: 'Eau',
			price: '2,00€',
			description: '500 ml',
			image: '/graphics/water.svg',
		},
		{
			name: 'Mezzo Mix',
			price: '2,50€',
			description: 'Canette 330 ml',
			image: '/graphics/cold drinks sprite cola fanta.svg',
		},
		{
			name: 'Red Bull',
			price: '3,50€',
			description: 'Canette 250 ml',
			image: '/graphics/redbull.svg',
		},
	],
};

export function MenuSection() {
	const [activeCategory, setActiveCategory] = useState('beef');

	return (
		<section
			id='menu'
			className='relative py-20 md:py-32 overflow-hidden bg-purple-gradient'
		>
			<div className='absolute inset-0 bg-purple-gradient opacity-80' />
			<div className='absolute -top-24 -left-24 w-80 h-80 bg-pink-dark/20 rounded-full blur-3xl' />
			<div className='absolute -bottom-24 -right-24 w-96 h-96 bg-brand-purple-soft/20 rounded-full blur-3xl' />
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<SectionHeader
					title='NOS BURGERS'
					subtitle='Steaks de bœuf maison, fried chicken croustillant & ingrédients frais'
				/>

				{/* Deal Banner - Eye-Catching */}
				<div className='mb-16 relative group'>
					<div
						className='relative p-8 
    bg-[#4B1F4A] 
    rounded-3xl overflow-hidden
    transition-all duration-300
    hover:[box-shadow:0_20px_60px_rgba(75,31,74,0.4)]'
					>
						{/* Motif de fond */}
						<div
							className='absolute inset-0 opacity-10'
							style={{
								backgroundImage:
									'radial-gradient(circle, #E8A0BF 2px, transparent 2px)',
								backgroundSize: '30px 30px',
							}}
						/>

						{/* Dégradé lumineux */}
						<div className='absolute -top-40 -right-40 w-80 h-80 bg-[#E8A0BF] rounded-full opacity-5 blur-3xl group-hover:opacity-10 transition-opacity duration-500' />

						<div className='relative text-center'>
							<p
								className='text-5xl md:text-8xl font-black text-white mb-2 tracking-tighter
        group-hover:scale-105 transition-transform duration-300'
								style={{ textShadow: '4px 4px 0 #2D0F2C' }}
							>
								MENU
							</p>

							<div className='flex items-center justify-center gap-4 mb-4'>
								<span className='h-px flex-1 bg-gradient-to-r from-transparent via-[#E8A0BF]/40 to-transparent' />
								<p
									className='text-lg md:text-xl text-[#E8A0BF] font-medium tracking-widest uppercase
          group-hover:text-white transition-colors duration-300'
								>
									Burger • Frites • Boisson
								</p>
								<span className='h-px flex-1 bg-gradient-to-r from-transparent via-[#E8A0BF]/40 to-transparent' />
							</div>

							<div
								className='inline-block bg-white rounded-full px-8 py-3
        shadow-lg group-hover:shadow-2xl
        group-hover:scale-105 transition-all duration-300
        border-2 border-transparent group-hover:border-[#E8A0BF]'
							>
								<span className='text-4xl md:text-5xl font-black text-[#4B1F4A]'>
									4,50 €
								</span>
							</div>

							<p className='text-[#E8A0BF]/70 text-sm mt-3 group-hover:text-[#E8A0BF] transition-colors duration-300'>
								Offre valable jusqu'au 31/05
							</p>
						</div>
					</div>
				</div>

				{/* Category Tabs - Bold Restaurant Style */}
				<div
					className='flex items-center gap-3 mb-16 overflow-x-auto md:overflow-visible pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-center snap-x snap-mandatory'
					role='tablist'
					aria-label='Catégories du menu'
				>
					{categories.map((category) => {
						const Icon = category.icon;
						const isActive = activeCategory === category.id;
						return (
							<button
								key={category.id}
								onClick={() => setActiveCategory(category.id)}
								type='button'
								role='tab'
								aria-selected={isActive}
								className={`group snap-start relative inline-flex items-center gap-3 px-6 md:px-8 py-3.5 md:py-4 rounded-2xl font-black text-base md:text-lg tracking-tight whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-light/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
									isActive
										? 'bg-gradient-to-br from-pink-dark to-brand-purple text-ui-white shadow-[0_16px_40px_rgba(75,31,74,0.25)] ring-1 ring-ui-white/20 -translate-y-0.5'
										: 'bg-brand-purple/25 border border-ui-white/10 text-ui-white/90 hover:border-pink-light/50 hover:bg-ui-white/10 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(75,31,74,0.18)]'
								}`}
							>
								<Icon
									className={`w-5 h-5 md:w-6 md:h-6 transition-colors ${
										isActive
											? 'text-ui-white'
											: 'text-pink-light/90 group-hover:text-pink-light'
									}`}
								/>
								<span>{category.label}</span>
							</button>
						);
					})}
				</div>
        
				{/* Menu Items */}
				<div
					key={activeCategory}
					className='animate-in fade-in-0 duration-500 ease-out'
				>
					<MenuCategory
						items={menuItems[activeCategory as keyof typeof menuItems]}
					/>
				</div>

				{/* Sides & Extras - Floating Style */}
				<div className='mt-24 space-y-16'>
					{/* Appetizers Section */}
					<div>
						<h3 className='text-4xl md:text-5xl font-black text-pink-light mb-12 tracking-tighter text-center'>
							ENTRÉES & ACCOMPAGNEMENTS
						</h3>
						<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-10'>
							{[
								{
									name: 'Chili Cheese Nuggets',
									image: '/Appetizers/Chilli-Cheese-Nuggets.webp',
									prices: '6 pcs 5€ • 10 pcs 7,50€ • 16 pcs 11€',
								},
								{
									name: 'Mozzarella Sticks',
									image: '/Appetizers/Mozarella-Sticks.webp',
									prices: '4 pcs 5€ • 8 pcs 9€ • 14 pcs 14€',
								},
								{
									name: 'Onion Rings',
									image: '/Appetizers/Onion-Rings.webp',
									prices: '6 pcs 4€ • 12 pcs 7€ • 24 pcs 12€',
								},
								{
									name: 'Portion de frites',
									image: '/Appetizers/Pommes_3,5euros.webp',
									prices: '3,50€',
									featured: true,
								},
							].map((item) => (
								<div key={item.name} className='group relative cursor-pointer'>
									<div className='relative w-full aspect-square mb-4 group-hover:-translate-y-2 transition-transform duration-500'>
										{/* Halal Badge - Bottom Left Corner */}
										<div className='absolute bottom-2 left-2 z-20 group-hover:scale-110 transition-transform duration-300'>
											<img
												src='/graphics/halal logo.svg'
												alt='100% Halal'
												className='h-10 w-10 md:h-12 md:w-12 drop-shadow-lg'
											/>
										</div>
										<img
											src={item.image}
											alt={item.name}
											className='w-full h-full object-contain drop-shadow-[0_15px_40px_rgba(0,0,0,0.3)] group-hover:drop-shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-500'
											style={{
												filter:
													'drop-shadow(0 8px 20px rgba(251, 191, 36, 0.2))',
											}}
										/>
									</div>
									<div className='text-center'>
										<h4 className='text-xl font-black text-ui-white mb-2 tracking-tight group-hover:text-pink-light transition-colors'>
											{item.name}
										</h4>
										<p
											className={`font-bold ${
												item.featured
													? 'text-2xl text-pink-light'
													: 'text-sm text-pink-light'
											}`}
										>
											{item.prices}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Fried Chicken Section */}
					<div>
						<h3 className='text-4xl md:text-5xl font-black text-pink-light mb-12 tracking-tighter text-center'>
							POULET FRIT
						</h3>
						<div className='grid sm:grid-cols-2 gap-12'>
							{[
								{
									name: 'Chicken Wings',
									image: '/Fried-Chicken/Chicken-Wings.webp',
									prices: '6 pcs 7,50€ • 10 pcs 11€ • 20 pcs 20€',
								},
								{
									name: 'Chicken Strips',
									image: '/Fried-Chicken/Chicken-Stripes.webp',
									prices: '3 pcs 6€ • 6 pcs 11,50€ • 9 pcs 16€',
								},
							].map((item) => (
								<div key={item.name} className='group relative cursor-pointer'>
									<div className='relative w-full aspect-video mb-6 group-hover:-translate-y-2 transition-transform duration-500'>
										{/* Halal Badge - Bottom Left Corner */}
										<div className='absolute bottom-2 left-2 z-20 group-hover:scale-110 transition-transform duration-300'>
											<img
												src='/graphics/halal logo.svg'
												alt='100% Halal'
												className='h-12 w-12 md:h-14 md:w-14 drop-shadow-lg'
											/>
										</div>
										<img
											src={item.image}
											alt={item.name}
											className='w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] group-hover:drop-shadow-[0_25px_70px_rgba(0,0,0,0.4)] transition-all duration-500'
											style={{
												filter:
													'drop-shadow(0 10px 25px rgba(251, 191, 36, 0.25))',
											}}
										/>
									</div>
									<div className='text-center'>
										<h4 className='text-2xl lg:text-3xl font-black text-ui-white mb-3 tracking-tight group-hover:text-pink-light transition-colors'>
											{item.name}
										</h4>
										<p className='text-lg font-bold text-pink-light'>
											{item.prices}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Dips Section - Restaurant Menu Style */}
				<div className='mt-16'>
					<h3 className='text-4xl md:text-5xl font-black text-pink-light mb-12 tracking-tighter text-center'>
						SAUCES & DIPS
					</h3>
					<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6'>
						{[
							{ name: 'Mayo', price: '0,50€' },
							{ name: 'Ketchup', price: '0,50€' },
							{ name: 'Garlic Flip', price: '1,00€' },
							{ name: 'Blazing BBQ', price: '1,00€' },
							{ name: 'Super Curry', price: '1,00€' },
							{ name: "Dragon's Flame", price: '1,00€' },
							{ name: 'Smokie Volcano', price: '1,00€' },
							{ name: 'Sweet Chili Magic', price: '1,00€' },
							{ name: 'Tangy Chili Cheese', price: '1,00€' },
							{ name: 'Foodie Burger Sauce', price: '1,00€' },
						].map((dip) => (
							<div key={dip.name} className='group cursor-pointer'>
								<div className='relative w-full aspect-square mb-3'>
									<img
										src='/graphics/dips.svg'
										alt={dip.name}
										className='w-full h-full object-contain group-hover:-translate-y-1 transition-transform duration-300'
									/>
								</div>
								<div className='text-center'>
									<p className='text-ui-white font-bold text-sm mb-1 group-hover:text-pink-light transition-colors'>
										{dip.name}
									</p>
									<p className='text-pink-light font-black text-lg'>
										{dip.price}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
