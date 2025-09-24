import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import handicraftsImage from '@/assets/handicrafts.jpg';

const MarketplaceSection = () => {
  const products = [
    {
      id: 1,
      name: "Handwoven Pashmina Shawl",
      price: "₹12,500",
      originalPrice: "₹15,000",
      rating: 4.8,
      reviews: 127,
      image: handicraftsImage,
      category: "Textiles",
      origin: "Kashmir",
      description: "Authentic Kashmir Pashmina, hand-woven by master artisans",
    },
    {
      id: 2,
      name: "Brass Ganesha Sculpture",
      price: "₹8,750",
      originalPrice: "₹10,500",
      rating: 4.9,
      reviews: 89,
      image: handicraftsImage,
      category: "Sculptures",
      origin: "Tamil Nadu",
      description: "Traditional brass sculpture crafted using ancient techniques",
    },
    {
      id: 3,
      name: "Blue Pottery Vase Set",
      price: "₹3,200",
      originalPrice: "₹4,000",
      rating: 4.7,
      reviews: 156,
      image: handicraftsImage,
      category: "Pottery",
      origin: "Rajasthan",
      description: "Hand-painted blue pottery in traditional Jaipur style",
    },
  ];

  return (
    <section id="marketplace" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Heritage <span className="text-primary">Marketplace</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover authentic Indian handicrafts and traditional artworks, 
            directly from master artisans across the country.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-heritage transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90">
                    {product.origin}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Button variant="ghost" size="icon" className="bg-background/90 hover:bg-background">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription className="mt-1">{product.description}</CardDescription>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-medium ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  <Badge variant="outline" className="ml-auto">
                    {product.category}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>
                </div>
                
                <Button variant="heritage" className="w-full">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Explore All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;