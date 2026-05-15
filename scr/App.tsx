import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { StatisticsSection } from './components/StatisticsSection';
import { ReasonsSection } from './components/ReasonsSection';
import { ComparisonSection } from './components/ComparisonSection';
import { InterviewSection } from './components/InterviewSection';
import { WarningSection } from './components/WarningSection';
import { FinalSection } from './components/FinalSection';
import { AudioArchiveSection } from './components/AudioArchiveSection';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fff7e8] text-[#402715] font-body relative selection:bg-[#b46f1f] selection:text-[#fff7e8] overflow-x-hidden">
      
      {/* Top Floating Navigation */}
      <Navigation />

      {/* Main Chapter Flow */}
      <main>
        {/* 1. HERO SECTION */}
        <HeroSection />

        {/* 2. INTRODUCTION SECTION */}
        <IntroSection />

        {/* 3. STATISTICS & RESEARCH SECTION */}
        <StatisticsSection />

        {/* 4. “НЕГЕ САҒЫНАДЫ?” SECTION */}
        <ReasonsSection />

        {/* 5. COMPARISON SECTION */}
        <ComparisonSection />

        {/* 6. INTERVIEW SECTION */}
        <InterviewSection />

        {/* 8. HISTORICAL WARNING SECTION */}
        <WarningSection />

        {/* 9. AUDIO ARCHIVE SECTION */}
        <AudioArchiveSection />

      </main>

      {/* 10. FINAL SECTION */}
      <FinalSection />

    </div>
  );
};

export default App;
