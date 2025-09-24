import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import museumImage from '@/assets/museum.jpg';

const MuseumSection = () => {
  const artifacts = [
    {
      id: 1,
      name: "Harappan Civilization Pottery",
      period: "2600-1900 BCE",
      location: "National Museum, Delhi",
      description: "Well-preserved pottery from the Indus Valley Civilization",
      significance: "One of the earliest urban civilizations",
      image: museumImage,
      category: "Archaeology",
    },
    {
      id: 2,
      name: "Chola Bronze Sculptures",
      period: "9th-13th Century CE",
      location: "Government Museum, Chennai",
      description: "Exquisite bronze sculptures from the Chola dynasty",
      significance: "Represents the pinnacle of bronze casting art",
      image: museumImage,
      category: "Sculpture",
    },
    {
      id: 3,
      name: "Mughal Miniature Paintings",
      period: "16th-18th Century CE",
      location: "Victoria & Albert Museum",
      description: "Intricate miniature paintings from Mughal courts",
      significance: "Fusion of Persian and Indian artistic traditions",
      image: museumImage,
      category: "Painting",
    },
  ];

  const virtualTours = [
    {
      title: "Red Fort Virtual Experience",
      duration: "45 minutes",
      participants: "2.3k+ joined",
      nextTour: "Today 3:00 PM IST",
    },
    {
      title: "Ajanta Caves Journey",
      duration: "60 minutes",
      participants: "1.8k+ joined",
      nextTour: "Tomorrow 11:00 AM IST",
    },
  ];

  return (
    <section id="museum" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Digital <span className="text-primary">Museum</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore India's precious artifacts, archaeological treasures, and historical collections
            from the comfort of your home.
          </p>
        </div>

        {/* Artifacts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {artifacts.map((artifact) => (
            <Card key={artifact.id} className="group hover:shadow-royal transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={artifact.image}
                  alt={artifact.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90">
                    {artifact.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg">{artifact.name}</CardTitle>
                <CardDescription>{artifact.description}</CardDescription>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {artifact.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {artifact.location}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="bg-muted/50 p-3 rounded-lg mb-4">
                  <p className="text-sm font-medium mb-1">Historical Significance:</p>
                  <p className="text-sm text-muted-foreground">{artifact.significance}</p>
                </div>
                
                <Button variant="royal" className="w-full">
                  Explore Artifact
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Virtual Tours */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Virtual Heritage Tours</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {virtualTours.map((tour, index) => (
              <Card key={index} className="bg-background/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">{tour.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {tour.participants}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Next Tour: {tour.nextTour}</span>
                    <Button variant="heritage" size="sm">
                      Join Tour
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg">
              Browse All Virtual Tours
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MuseumSection;