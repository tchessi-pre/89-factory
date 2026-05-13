import { FireFlame } from "iconoir-react"
import Image from "next/image"

interface MenuItem {
  name: string
  price: string
  description: string
  spiceLevel?: number
  image?: string
  isNew?: boolean
  isPopular?: boolean
  discount?: string
}

interface MenuCategoryProps {
  items: MenuItem[]
}

export function MenuCategory({ items }: MenuCategoryProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
      {items.map((item, index) => (
        <div
          key={item.name}
          className="group relative cursor-pointer 
            rounded-[2rem] 
            bg-white/80 backdrop-blur-sm 
            border border-brand-purple/10 
            hover:border-pink-light/40 
            hover:bg-white/95
            shadow-[0_4px_20px_rgba(75,31,74,0.06),0_1px_3px_rgba(0,0,0,0.02)] 
            hover:shadow-[0_20px_50px_rgba(75,31,74,0.12),0_8px_20px_rgba(75,31,74,0.06)] 
            transition-all duration-500 ease-out
            overflow-visible"
        >
          {/* Indicateur numéro item */}
          <span className="absolute top-6 left-6 text-7xl font-black text-brand-purple/[0.04] select-none
            group-hover:text-brand-purple/[0.06] transition-colors duration-500 z-0
            leading-none">
            {String(index + 1).padStart(2, '0')}
          </span>

          {/* Floating Burger Image */}
          {item.image && (
            <div className="relative w-full aspect-square mb-2 px-4 pt-4">
              {/* Price Badge */}
              <div className="absolute top-0 right-0 z-20 
                bg-gradient-to-br from-pink-dark to-brand-purple
                text-ui-white px-5 py-3 rounded-full 
                shadow-[0_8px_25px_rgba(75,31,74,0.35)]
                border-2 border-white/20
                group-hover:scale-110 group-hover:shadow-[0_12px_35px_rgba(75,31,74,0.5)]
                group-hover:border-white/40
                transition-all duration-400 ease-out
                flex items-baseline gap-0.5">
                {item.discount && (
                  <span className="text-xs line-through opacity-70 mr-1">{item.discount}€</span>
                )}
                <span className="text-2xl md:text-3xl font-black tracking-tight">
                  {item.price}
                </span>
                <span className="text-base font-normal ml-0.5">€</span>
              </div>

              {/* Badge "Nouveau" */}
              {item.isNew && (
                <div className="absolute top-0 left-4 z-20 
                  bg-gradient-to-r from-emerald-400 to-emerald-500
                  text-white text-xs font-bold 
                  px-3.5 py-1.5 rounded-full
                  shadow-lg shadow-emerald-500/25
                  animate-pulse">
                  ✨ Nouveau
                </div>
              )}

              {/* Badge "Populaire" */}
              {item.isPopular && !item.isNew && (
                <div className="absolute top-0 left-4 z-20 
                  bg-gradient-to-r from-amber-400 to-orange-400
                  text-white text-xs font-bold 
                  px-3.5 py-1.5 rounded-full
                  shadow-lg shadow-orange-400/25
                  animate-pulse">
                  🔥 Populaire
                </div>
              )}

              {/* Image Burger */}
              <div className="relative w-full h-full 
                group-hover:-translate-y-3 group-hover:rotate-[-1deg]
                transition-all duration-500 ease-out
                [perspective:1000px]">
                {/* Effet lumineux derrière l'image */}
                <div className="absolute inset-0 bg-gradient-radial from-pink-light/10 via-transparent to-transparent 
                  rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  scale-90 group-hover:scale-110" />

                {/* Halo lumineux */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/4 
                  bg-gradient-to-t from-brand-purple/10 to-transparent 
                  rounded-full blur-xl opacity-0 group-hover:opacity-100 
                  transition-all duration-500" />

                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain 
                    drop-shadow-[0_18px_50px_rgba(75,31,74,0.2)] 
                    group-hover:drop-shadow-[0_26px_70px_rgba(75,31,74,0.35)] 
                    group-hover:scale-105
                    transition-all duration-500 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 4}
                />
              </div>
            </div>
          )}

          {/* Product Info */}
          <div className="text-center px-6 pb-7 relative z-10">
            {/* Séparateur décoratif */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-pink-light/30 
                group-hover:w-12 group-hover:to-pink-light/50 transition-all duration-500" />
              <div className="w-1.5 h-1.5 bg-pink-dark/80 rounded-full 
                group-hover:scale-150 group-hover:bg-pink-light transition-all duration-300
                shadow-[0_0_10px_rgba(232,160,191,0.3)]" />
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-pink-light/30 
                group-hover:w-12 group-hover:to-pink-light/50 transition-all duration-500" />
            </div>

            <h3 className="text-2xl lg:text-3xl font-black text-brand-purple mb-2 tracking-tight 
              group-hover:text-pink-dark transition-colors duration-300
              [text-wrap:balance]">
              {item.name}
            </h3>

            <p className="text-ui-black/55 text-sm leading-relaxed line-clamp-2 mb-4
              group-hover:text-ui-black/65 transition-colors duration-300
              [text-wrap:balance]">
              {item.description}
            </p>

            {/* Spice Level Indicator */}
            {item.spiceLevel !== undefined && item.spiceLevel > 0 && (
              <div className="flex flex-col items-center gap-1.5">
                <div className="flex items-center justify-center gap-1.5">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="relative">
                      <FireFlame
                        className={`w-5 h-5 transition-all duration-300 ${i < item.spiceLevel!
                            ? "text-pink-dark fill-pink-dark scale-110"
                            : "text-ui-black/10"
                          }`}
                      />
                      {i < item.spiceLevel! && (
                        <div className="absolute inset-0 bg-pink-dark/30 blur-sm rounded-full 
                          animate-pulse" />
                      )}
                    </div>
                  ))}
                </div>
                <span className="text-[11px] font-semibold text-pink-dark/70 tracking-wide uppercase">
                  {item.spiceLevel === 1 ? "Doux" : item.spiceLevel === 2 ? "Épicé" : "Très épicé 🔥"}
                </span>
              </div>
            )}
          </div>

          {/* Bordure lumineuse au hover */}
          <div className="absolute inset-0 rounded-[2rem] 
            ring-1 ring-transparent group-hover:ring-pink-light/15 
            transition-all duration-500 pointer-events-none" />

          {/* Effet de brillance au survol */}
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
            <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/5 to-transparent 
              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </div>
        </div>
      ))}
    </div>
  )
}