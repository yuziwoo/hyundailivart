import { ComponentStyle as S } from './Concierge.styled';
import { ConciergeDataProps } from '../../types/concierge';
import MotionButton from '../motion/MotionButton';

interface ConciergeProps {
  data: ConciergeDataProps[] | undefined;
}

const Concierge = ({ data }: ConciergeProps) => {
  if (data === undefined) return <S.Component></S.Component>;
  return (
    <S.Component>
      <S.Title>
        CONCIERGE
        <MotionButton style={{ position: 'absolute', right: '10px' }}>
          <S.PlusButton />
        </MotionButton>
      </S.Title>

      <S.ConciergeWrap>
        {data.map(({ imgURL, title, description }) => (
          <S.Concierge key={title}>
            <MotionButton>
              <S.Info>
                <S.Thumb style={{ backgroundImage: `url(${imgURL})` }} />
                <S.Line />
                <S.ConciergeTitle>{title}</S.ConciergeTitle>
                <S.Description>{description}</S.Description>
              </S.Info>
            </MotionButton>
          </S.Concierge>
        ))}
      </S.ConciergeWrap>
    </S.Component>
  );
};

export default Concierge;
