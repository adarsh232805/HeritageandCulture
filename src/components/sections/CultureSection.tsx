import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';

const CultureSection = () => {
  const traditions = [
    {
      id: 1,
      title: "Classical Dance Forms",
      description: "Explore the eight classical dance forms of India, each with unique expressions and cultural significance",
      region: "Pan-India",
      category: "Performing Arts",
      highlights: ["Bharatanatyam", "Kathak", "Odissi", "Kuchipudi"],
      apiLink: "https://api.indianheritage.org/dance-forms",
    },
    {
      id: 2,
      title: "Traditional Festivals",
      description: "Discover the vibrant festivals that celebrate India's diverse cultural calendar throughout the year",
      region: "All States",
      category: "Celebrations",
      highlights: ["Diwali", "Holi", "Dussehra", "Eid"],
      apiLink: "https://api.indianheritage.org/festivals",
    },
    {
      id: 3,
      title: "Ancient Philosophies",
      description: "Delve into the profound philosophical traditions that have shaped Indian thought for millennia",
      region: "Historical",
      category: "Philosophy",
      highlights: ["Vedanta", "Buddhism", "Jainism", "Yoga"],
      apiLink: "https://api.indianheritage.org/philosophy",
    },
    {
      id: 4,
      title: "Regional Cuisines",
      description: "Taste the diverse culinary traditions that reflect India's geographical and cultural diversity",
      region: "Multi-Regional",
      category: "Culinary Arts",
      highlights: ["Mughlai", "South Indian", "Bengali", "Rajasthani"],
      apiLink: "https://api.indianheritage.org/cuisine",
    },
    {
      id: 5,
      title: "Textile Traditions",
      description: "Experience the rich textile heritage from handloom weaving to intricate embroidery techniques",
      region: "Craft Centers",
      category: "Textiles",
      highlights: ["Silk Weaving", "Block Printing", "Embroidery", "Dyeing"],
      apiLink: "https://api.indianheritage.org/textiles",
    },
    {
      id: 6,
      title: "Spiritual Practices",
      description: "Understanding the various spiritual and religious practices that form the backbone of Indian culture",
      region: "Sacred Sites",
      category: "Spirituality",
      highlights: ["Meditation", "Pilgrimage", "Rituals", "Sacred Texts"],
      apiLink: "https://api.indianheritage.org/spirituality",
    },
  ];

  const upcomingEvents = [
    {
      title: "International Yoga Day Celebration",
      date: "June 21, 2024",
      location: "Virtual & Multiple Cities",
      participants: "10M+ expected",
    },
    {
      title: "Classical Music Festival",
      date: "December 15-20, 2024",
      location: "Chennai, Tamil Nadu",
      participants: "5K+ artists",
    },
  ];

  return (
    <section id="culture" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cultural <span className="text-primary">Traditions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Immerse yourself in the diverse cultural tapestry of India, where ancient traditions 
            continue to thrive alongside modern expressions of art, spirituality, and community life.
          </p>
        </div>

        {/* Culture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {traditions.map((tradition) => (
            <Card key={tradition.id} className="group hover:shadow-heritage transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{tradition.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {tradition.description}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="ml-2">
                    {tradition.category}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-2 mt-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{tradition.region}</span>
                </div>
              </CardHeader>

              <CardContent>
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2">Key Highlights:</p>
                  <div className="flex flex-wrap gap-2">
                    {tradition.highlights.map((highlight, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-muted/50 p-3 rounded-lg mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">API Endpoint:</span>
                  </div>
                  <code className="text-xs text-muted-foreground break-all">
                    {tradition.apiLink}
                  </code>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="heritage" size="sm" className="flex-1">
                    Explore Tradition
                  </Button>
                  <Button variant="outline" size="sm">
                    API Docs
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cultural Events */}
        <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Upcoming Cultural Events</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="bg-background/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {event.participants}
                    </div>
                    <Button variant="royal" size="sm">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg">
              View All Cultural Events
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;