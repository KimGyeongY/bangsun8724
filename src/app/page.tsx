import { siteConfig } from '@/lib/config';
import '@/app/preset-override.css';
import { HeroSection } from '@/components/hero-section';
import { MergeTool } from '@/components/merge-tool';
import { GuideSection } from '@/components/guide-section';
import { FooterSection } from '@/components/footer-section';

export default function Home() {
  const isDark = siteConfig.bgStyle === 'dark';

  return (
    <main
      id="main"
      className={`min-h-screen ${isDark ? 'dark bg-[#0b1220] text-slate-100' : 'bg-white text-slate-900'}`}
    >
      <HeroSection
        badge={siteConfig.badge}
        title={siteConfig.title}
        subtitle={siteConfig.subtitle}
        accent={siteConfig.accent}
      />
      <MergeTool
        headerRow={siteConfig.headerRow}
        autoHeader={siteConfig.autoHeader}
        fileNameColumn={siteConfig.fileNameColumn}
        allSheets={siteConfig.allSheets}
        mergeSimilar={siteConfig.mergeSimilar}
        coerceNumbers={siteConfig.coerceNumbers}
        downloadName={siteConfig.downloadName}
        accent={siteConfig.accent}
      />
      <GuideSection
        heading={siteConfig.guideHeading}
        stepOne={siteConfig.stepOne}
        stepTwo={siteConfig.stepTwo}
        stepThree={siteConfig.stepThree}
        accent={siteConfig.accent}
      />
      <FooterSection note={siteConfig.footerNote} />
    </main>
  );
}
