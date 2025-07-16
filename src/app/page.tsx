import Page from '@/components/common/Page';
import Hero from '@/components/sections/Hero';
import ToggleTheme from '@/components/buttons/ToggleTheme';

function Home() {
  return (
    <>
      <ToggleTheme />
      <Page className={'grid place-content-center'}>
        <Hero />
      </Page>
    </>
  );
}

export default Home;
