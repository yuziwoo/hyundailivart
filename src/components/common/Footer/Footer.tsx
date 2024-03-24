import { ComponentStyle as S } from './Footer.styled';
import Logo from '../../Logo/Logo';
import MotionButton from '../../motion/MotionButton';

const Footer = () => {
  const page2 = ['AS 예약', '자주하는 질문', '1:1 문의', '매장찾기', '고객의 소리', '대량구매'];
  const sns = [1, 2, 3, 4, 5];
  const contacts = [
    'T. 제휴/대리점 개설 문의 02-0000-0000',
    'F. 02-0000-0000',
    'M. hyundai@livart.co.fake',
  ];
  const brandInfo = [
    { title: '(주)현대리바트', description: '' },
    { title: '대표이사', description: '홍길동' },
    { title: '본사', description: '경기도 용인시 남사읍 000' },
    { title: '서울사무소', description: '서울특별시 강남구 압구정로 201' },
    { title: '개인정보관리 책임자', description: '홍길동' },
    { title: '사업자등록번호', description: '000-00-00000' },
    { title: '통신판매업신고', description: '0000-용인처인-00000' },
  ];

  return (
    <S.Component>
      <S.TopPart>
        <S.LeftPart>
          <S.Pages>
            <S.Page>회사소개</S.Page>
            <S.Page>
              <strong>개인정보 처리방침</strong>
            </S.Page>
            <S.Page>위치정보 이용약관</S.Page>
            <S.Page>영상정보처리기기 운영/관리방침</S.Page>
            <S.Page>이용약관</S.Page>
            <S.Page>경영이념</S.Page>
            <S.Page>투자정보</S.Page>
            <S.Page>인재채용</S.Page>
            <S.Page>제휴 및 대리점 개설안내</S.Page>
          </S.Pages>

          <S.Line />

          <S.SNSAndPagesAndCall>
            <S.PagesAndSNS>
              <S.Pages2>
                {page2.map((text) => (
                  <S.Page2 key={text}>{text}</S.Page2>
                ))}
              </S.Pages2>
              <S.SNS>
                {sns.map((num) => (
                  <S.SNSIcon key={num}>
                    <MotionButton>
                      <img src={`../img/item/icon-link-${num}.png`} alt="SNS Icon" />
                    </MotionButton>
                  </S.SNSIcon>
                ))}
              </S.SNS>
            </S.PagesAndSNS>

            <S.Call>
              고객센터 1577-0000 <span>(유료)</span>
            </S.Call>
          </S.SNSAndPagesAndCall>
          <S.ContactList>
            {contacts.map((text) => (
              <S.Contacts key={text}>{text}</S.Contacts>
            ))}
          </S.ContactList>

          <S.BrandInfo>
            {brandInfo.map(({ title, description }) => (
              <S.BrandInfoBlock key={title}>
                <S.BrandInfoTitle>{title}</S.BrandInfoTitle>
                {description.length > 0 && (
                  <S.BrandInfoDescription>{description}</S.BrandInfoDescription>
                )}
              </S.BrandInfoBlock>
            ))}
          </S.BrandInfo>
        </S.LeftPart>

        <S.RightPart>
          <S.FamilySite>FAMILY SITE</S.FamilySite>
          <S.Logo>
            <Logo />
          </S.Logo>

          <S.MobileQR>
            <S.QRText>
              <strong>모바일 앱</strong>으로
              <br />
              더욱 편하게 쇼핑하세요.
            </S.QRText>
            <S.QRImg src="../img/system/qr.png" alt="QR 이미지" />
          </S.MobileQR>
        </S.RightPart>
      </S.TopPart>

      <S.BottomPart>
        <S.Copyright>Copyrightⓒ HYUNDAI LIVART Corporation. All Rights Reserved.</S.Copyright>
      </S.BottomPart>
    </S.Component>
  );
};

export default Footer;
