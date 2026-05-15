import Image from "next/image"

interface MenuItem {
  name: string
  price?: string
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

function PriceTag({ price }: { price: string }) {
  const match = price.match(/^([+]?)(\d+)[,.](\d+)€?$/)
  if (match) {
    const [, prefix, integer, decimal] = match
    return (
      <span className="inline-flex items-start leading-none font-black">
        {prefix && <span className="text-sm self-start mt-0.5 mr-px">{prefix}</span>}
        <span className="text-3xl">{integer}</span>
        <span className="flex flex-col leading-none text-sm ml-0.5 mt-0.5">
          <span>€</span>
          {decimal !== '00' && <span>{decimal}</span>}
        </span>
      </span>
    )
  }
  return <span className="text-xl font-black">{price}</span>
}

export function MenuCategory({ items }: MenuCategoryProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
      {items.map((item, index) => (
        <div
          key={item.name}
          className="group relative rounded-2xl
            border-[3px] border-brand-purple/80
            bg-ui-white/10 backdrop-blur-md
            shadow-[6px_6px_0_rgba(0,0,0,0.24)]
            hover:shadow-[10px_10px_0_rgba(0,0,0,0.28)]
            hover:-translate-x-[3px] hover:-translate-y-[3px]
            transition-all duration-200
            overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-ui-white/25 via-ui-white/5 to-brand-purple-soft/10" />
          <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-ui-white/10 to-transparent translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000" />

          {item.isNew && (
            <div className="absolute top-3 left-3 z-20
              bg-emerald-500 text-white text-xs font-black
              px-3 py-1 rounded-full uppercase tracking-wider shadow-[0_10px_20px_rgba(0,0,0,0.25)]">
              ✦ Nouveau
            </div>
          )}
          {item.isPopular && !item.isNew && (
            <div className="absolute top-3 left-3 z-20
              bg-pink-dark text-white text-xs font-black
              px-3 py-1 rounded-full uppercase tracking-wider shadow-[0_10px_20px_rgba(0,0,0,0.25)]">
              ★ Populaire
            </div>
          )}

          <div className="relative w-full aspect-square bg-ui-white/10">
            <div className="absolute inset-0 bg-gradient-to-b from-pink-light/25 via-ui-white/0 to-ui-white/0" />
            {item.image ? (
              <Image
                src={item.image}
                alt={item.name}
                fill
                quality={70}
                className="object-contain p-5
                  group-hover:scale-[1.08]
                  transition-transform duration-300 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ) : (
              <div className="absolute inset-0 grid place-items-center text-ui-white/60 text-sm font-semibold tracking-wide">
                Image bientôt
              </div>
            )}
          </div>

          <div className="relative p-4 border-t-[3px] border-brand-purple/80 bg-ui-white/85 backdrop-blur-sm">
            <div className="flex items-center justify-between gap-3">
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-black uppercase text-brand-purple leading-tight tracking-tight line-clamp-2">
                  {item.name}
                </h3>
                <p className="text-brand-purple/60 text-xs mt-1 leading-snug line-clamp-2">
                  {item.description}
                </p>
              </div>
              {item.price && (
                <div className="shrink-0 bg-brand-purple text-white rounded-xl px-3 py-1.5 shadow-[0_14px_30px_rgba(75,31,74,0.28)] ring-1 ring-ui-white/15">
                  <PriceTag price={item.price} />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
