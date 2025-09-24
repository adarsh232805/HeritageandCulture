import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Image, Video, Download, ExternalLink } from 'lucide-react';
import heroImage from '@/assets/hero-heritage.jpg';
import handicraftsImage from '@/assets/handicrafts.jpg';
import museumImage from '@/assets/museum.jpg';

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState('images');

  const mediaItems = {
    images: [
      {
        id: 1,
        title: "Taj Mahal at Sunrise",
        description: "The iconic monument in golden hour light",
        src: heroImage,
        category: "Architecture",
        location: "Agra, Uttar Pradesh",
        photographer: "Heritage Team",
      },
      {
        id: 2,
        title: "Traditional Handicrafts",
        description: "Collection of authentic Indian craftsmanship",
        src: handicraftsImage,
        category: "Crafts",
        location: "Various Regions",
        photographer: "Artisan Documentation",
      },
      {
        id: 3,
        title: "Museum Artifacts",
        description: "Precious historical artifacts and treasures",
        src: museumImage,
        category: "History",
        location: "National Museums",
        photographer: "Cultural Archive",
      },
      {
        id: 4,
        title: "Classical Dance Performance",
        description: "Bharatanatyam performance in traditional setting",
        src: heroImage,
        category: "Performing Arts",
        location: "Tamil Nadu",
        photographer: "Dance Heritage",
      },
      {
        id: 5,
        title: "Rajasthani Folk Festival",
        description: "Vibrant colors of Rajasthani culture",
        src: handicraftsImage,
        category: "Festivals",
        location: "Rajasthan",
        photographer: "Festival Documentation",
      },
      {
        id: 6,
        title: "Ancient Temple Architecture",
        description: "Intricate carvings and spiritual architecture",
        src: museumImage,
        category: "Architecture",
        location: "South India",
        photographer: "Temple Heritage",
      },
    ],
    videos: [
      {
        id: 1,
        title: "The Making of Kashmiri Carpets",
        description: "Traditional carpet weaving techniques passed down generations",
        thumbnail: handicraftsImage,
        duration: "12:30",
        category: "Craftsmanship",
        views: "1.2M views",
      },
      {
        id: 2,
        title: "Incredible India: Heritage Sites",
        description: "Journey through UNESCO World Heritage Sites of India",
        thumbnail: heroImage,
        duration: "25:45",
        category: "Documentary",
        views: "2.8M views",
      },
      {
        id: 3,
        title: "Classical Music Traditions",
        description: "The rich legacy of Indian classical music",
        thumbnail: museumImage,
        duration: "18:20",
        category: "Music",
        views: "950K views",
      },
    ],
  };

  const categories = ['All', 'Architecture', 'Crafts', 'History', 'Performing Arts', 'Festivals'];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Heritage <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Immerse yourself in the visual splendor of India's cultural heritage through 
            our curated collection of images and videos.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted rounded-lg p-1 flex">
            <Button
              variant={activeTab === 'images' ? 'heritage' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab('images')}
              className="rounded-md"
            >
              <Image className="w-4 h-4 mr-2" />
              Images
            </Button>
            <Button
              variant={activeTab === 'videos' ? 'heritage' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab('videos')}
              className="rounded-md"
            >
              <Video className="w-4 h-4 mr-2" />
              Videos
            </Button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Images Grid */}
        {activeTab === 'images' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaItems.images.map((item) => (
              <Card key={item.id} className="group hover:shadow-heritage transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90">
                      {item.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="bg-background/90 hover:bg-background">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="bg-background/90 hover:bg-background">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardContent className="p-0">
                    <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{item.location}</span>
                      <span>by {item.photographer}</span>
                    </div>
                  </CardContent>
                </CardHeader>
              </Card>
            ))}
          </div>
        )}

        {/* Videos Grid */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaItems.videos.map((item) => (
              <Card key={item.id} className="group hover:shadow-royal transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button variant="heritage" size="icon" className="h-16 w-16 rounded-full">
                      <Play className="h-8 w-8 ml-1" />
                    </Button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90">
                      {item.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge variant="outline" className="bg-background/90">
                      {item.duration}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardContent className="p-0">
                    <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                    <p className="text-sm text-muted-foreground">{item.views}</p>
                  </CardContent>
                </CardHeader>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Explore Full Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;