import { useState } from 'react';
import { ProductGroupProps } from '../../types/products';
import { ComponentStyle as S } from './RecommendedItems.styled';
import ProductThumb from '../product/ProductThumb/ProductThumb';
import MotionButton from '../motion/MotionButton';

interface RecommendedItemsProps {
  sectionTitle: string;
  itemGroups: ProductGroupProps[] | undefined;
}

const RecommendedItems = ({ sectionTitle, itemGroups }: RecommendedItemsProps) => {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  if (itemGroups === undefined) return <S.Component></S.Component>;
  return (
    <S.Component>
      <S.Title>
        {sectionTitle}
        <MotionButton style={{ position: 'absolute', right: '10px' }}>
          <S.PlusButton />
        </MotionButton>
      </S.Title>
      <S.Category>
        {itemGroups.map(({ title }, index) => (
          <S.CategoryName
            key={title}
            $isActive={index === activeGroupIndex}
            onClick={() => {
              setActiveGroupIndex(index);
            }}
          >
            {title}
          </S.CategoryName>
        ))}
      </S.Category>

      <S.ProductsWrap>
        {itemGroups[activeGroupIndex].products.map((data, index) => (
          <S.Product key={index}>
            <ProductThumb data={data} />
          </S.Product>
        ))}
      </S.ProductsWrap>
    </S.Component>
  );
};

export default RecommendedItems;
