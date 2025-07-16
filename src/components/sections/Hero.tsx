import Section from '@/components/common/Section';
import { Title, Large } from '@/components/ui/bloom/typography';
import { Button } from '@/components/ui/button';
import { AuroraText } from '@/components/magicui/aurora-text';

function Hero() {
  return (
    <Section className={'text-center'}>
      <Title className={'font-bold'}>
        <AuroraText colors={['#FFA347', '#FFDC70', '#FF7F6B', '#7FD8E6']}>
          The Place Where People Connects.
        </AuroraText>
      </Title>
      <div className={'mt-4 flex items-center justify-center gap-2'}>
        <Button>
          <Large>Sign Up</Large>
        </Button>
        <Large>To Start</Large>
      </div>
    </Section>
  );
}

export default Hero;
