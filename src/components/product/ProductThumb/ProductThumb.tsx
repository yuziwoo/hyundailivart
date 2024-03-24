import { ComponentStyle as S } from './ProductThumb.styled';
import { ProductThumbProps } from '../../../types/products';
import MotionButton from '../../motion/MotionButton';

const ProductThumb = ({ data }: { data: ProductThumbProps | undefined }) => {
  if (data === undefined) return <S.Component></S.Component>;
  return (
    <MotionButton style={{ width: '100%' }}>
      <S.Component>
        <S.Thumb style={{ backgroundImage: `url(${data.imgURL})` }}>
          <S.Event>{data.event.includes('sale') && <S.Sale>SALE</S.Sale>}</S.Event>
        </S.Thumb>
        <S.Info>
          <S.Name>{data.name}</S.Name>
          <S.Brand>{data.brand}</S.Brand>
          <S.FinalPrice>{data.finalPrice.toLocaleString()}원</S.FinalPrice>
        </S.Info>
      </S.Component>
    </MotionButton>
  );
};

export default ProductThumb;
