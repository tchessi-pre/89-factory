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

  return (
    <div className={className ?? 'text-center mb-8'}>
      <h2
        className={
          titleClassName ??
          'relative text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-4 text-shadow-lg'
        }
      >
        <span className={hasCustomTitle ? 'relative z-10 text-current' : 'relative z-10 text-white'}>
          {title}
        </span>
        <span
          className='absolute inset-0 z-0 text-transparent [-webkit-text-stroke:1px_#a855f7] translate-x-1 translate-y-1'
        >
          {title}
        </span>
      </h2>
      {subtitle ? (
        <p
          className={
            subtitleClassName ??
            'text-xl text-ui-white/80 max-w-3xl mx-auto font-medium text-shadow-lg'
          }
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
