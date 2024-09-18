import Header from '@/components/header';
import HeroSection from '@/components/HeroSection';
import CardsSection from '@/components/cards-section';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CardsSection />
      {/* Rest of your homepage content */}
      <main className="container mx-auto px-4 py-8 text-gray-800">
        {/* Add more content here */}
      </main>
    </div>
  );
}
