interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  category: string;
}

export function ProductCard({ title, price, image, category }: ProductCardProps) {
  return (
    <div className="group relative bg-card border border-border hover:border-primary transition-all duration-500 overflow-hidden">
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary z-10" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary z-10" />
      
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-card/50">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-primary text-xs tracking-[0.2em] uppercase mb-2">{category}</p>
        <h3 className="font-serif text-xl text-foreground mb-3">{title}</h3>
        <p className="text-2xl text-primary font-medium mb-4">{price}</p>
        <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-wider uppercase text-sm py-3 transition-all duration-300 border border-primary hover:shadow-lg hover:shadow-primary/20">
          Заказать
        </button>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-500" />
    </div>
  );
}