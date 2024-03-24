import { useState } from 'react';
import { useProductCountLimit } from '../../hooks/products/useProductCountLimit';
import { ProductGroupProps } from '../../types/products';
import { ComponentStyle as S } from './BestItems.styled';
import ProductThumb from '../product/ProductThumb/ProductThumb';
import MotionButton from '../motion/MotionButton';

interface BestItemsProps {
  itemGroups: ProductGroupProps[] | undefined;
}

const BestItems = ({ itemGroups }: BestItemsProps) => {
  const { productCount, increaseCount } = useProductCountLimit();
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  if (itemGroups === undefined) return <S.Component></S.Component>;
  return (
    <S.Component>
      <S.Title>BEST</S.Title>
      <S.Category>
        {itemGroups.map(({ title }, index) => (
          <S.CategoryNameWrap key={title}>
            <MotionButton
              onClick={() => {
                setActiveGroupIndex(index);
              }}
            >
              <S.CategoryName $isActive={index === activeGroupIndex}>{title}</S.CategoryName>
            </MotionButton>
          </S.CategoryNameWrap>
        ))}
      </S.Category>

      <S.ProductsWrap>
        {itemGroups[activeGroupIndex].products.slice(0, productCount).map((data, index) => (
          <S.Product key={index}>
            <ProductThumb data={data} />
          </S.Product>
        ))}
      </S.ProductsWrap>

      <S.IncreaseButtonWrap>
        {productCount < itemGroups[activeGroupIndex].products.length && (
          <MotionButton
            onClick={() => {
              increaseCount();
            }}
            style={{ width: '100%' }}
          >
            <S.IncreaseButton>
              <S.IncreaseButtonText>상품 더보기</S.IncreaseButtonText>
            </S.IncreaseButton>
          </MotionButton>
        )}
      </S.IncreaseButtonWrap>
    </S.Component>
  );
};

export default BestItems;
