type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

export function SectionHeader({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeaderProps) {
  const hasCustomTitle = Boolean(titleClassName);
  const hasCustomSubtitle = Boolean(subtitleClassName);

  return (
    <div className={className ?? 'relative text-center mb-10 md:mb-12'}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-10 flex justify-center"
      >
        <div className="h-24 w-56 rounded-full bg-pink-dark/ blur-3xl" />
      </div>
      <h2
        className={
          titleClassName ??
          'relative text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.92] mb-4 text-shadow-lg [text-wrap:balance]'
        }
      >
        <span className={hasCustomTitle ? 'relative z-10 text-current' : 'relative z-10 text-white'}>
          {title}
        </span>
        <span
          className='absolute inset-0 z-0 text-transparent [-webkit-text-stroke:2px_#a855f7] translate-x-1 translate-y-1 opacity-90'
        >
          {title}
        </span>
      </h2>
      {subtitle ? (
        <p
          className={
            subtitleClassName ??
            'text-base sm:text-lg md:text-xl text-ui-white/80 max-w-3xl mx-auto font-medium text-shadow-lg [text-wrap:balance]'
          }
        >
          {subtitle}
        </p>
      ) : null}
      {!hasCustomSubtitle ? (
        <div aria-hidden="true" className="mt-6 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-ui-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-pink-light/90" />
          <span className="h-px w-10 bg-ui-white/20" />
        </div>
      ) : null}
    </div>
  );
}
