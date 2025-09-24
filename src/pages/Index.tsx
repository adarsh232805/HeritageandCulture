import { useState } from 'react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import CultureSection from '@/components/sections/CultureSection';
import MarketplaceSection from '@/components/sections/MarketplaceSection';
import MuseumSection from '@/components/sections/MuseumSection';
import GallerySection from '@/components/sections/GallerySection';
import Chatbot from '@/components/Chatbot';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const Index = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CultureSection />
        <MarketplaceSection />
        <MuseumSection />
        <GallerySection />
      </main>
      
      {/* Floating Chat Button */}
      {!isChatbotOpen && (
        <Button
          variant="heritage"
          size="icon"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-royal z-40 hover:scale-110 transition-transform"
          onClick={() => setIsChatbotOpen(true)}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
      
      {/* Chatbot */}
      <Chatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </div>
  );
};

export default Index;
