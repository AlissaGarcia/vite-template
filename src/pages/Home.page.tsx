
import { ArticlesCardsGrid } from '@/components/Card/ArticleCardGrid';
import { ContactUs } from '@/components/Contato/ContactUs';
import { HeaderMegaMenu } from '@/components/Header/HeaderMegaMenu';
import { HeroImageBackground } from '@/components/Hero/HeroImageBackground';
import { HeroText } from '@/components/HeroText/HeroText';
import { Demo } from '@/components/Titulo/Demo';
export function HomePage() {
  return (
    <>
    <HeaderMegaMenu />
    <HeroImageBackground />
    <HeroText/>
    <Demo />
    <ArticlesCardsGrid />
    <ContactUs />
    </>
  );
}


