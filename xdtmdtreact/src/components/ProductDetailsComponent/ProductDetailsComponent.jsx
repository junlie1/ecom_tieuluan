import React from 'react'
import imageProduct from '../../accsets/images/anh1.jpg'
import { Col, Image, Row } from 'antd'
import { WrapperAddressProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleNameProduct, WrapperStyleTextSell } from './style'
import { StarFilled, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ProductDetailsComponent = () => {
  const onChange = () => { }
  return (
    <Row style={{ padding: '16px', background: '#fff' }}>
      <Col span={10} style={{borderRight: "1px solid #e5e5e5", paddingRight: "8px", borderRadius: "4px"}}>
        <Image src={imageProduct} alt="image product" preview={false} />
        <Row style={{ paddingTop: '10px', justifyContent: 'space-between' }}>
          <WrapperStyleColImage span={4}>
            <Image src={imageProduct} alt="image small" preview={false} />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <Image src={imageProduct} alt="image small" preview={false} />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <Image src={imageProduct} alt="image small" preview={false} />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <Image src={imageProduct} alt="image small" preview={false} />
          </WrapperStyleColImage>
        </Row>
      </Col>

      <Col span={14} style={{paddingLeft: "10px"}}>
        <WrapperStyleNameProduct>
          Apple iPhone 16 Pro Max
        </WrapperStyleNameProduct>
        <div>
          <StarFilled style={{ fontSize: '12px', color: 'rgb(255, 196, 0)' }} />
          <StarFilled style={{ fontSize: '12px', color: 'rgb(255, 196, 0)' }} />
          <StarFilled style={{ fontSize: '12px', color: 'rgb(255, 196, 0)' }} />
          <WrapperStyleTextSell> | Đã bán 1000+ </WrapperStyleTextSell>
        </div>
        <WrapperPriceProduct>
          <WrapperPriceTextProduct>200.000</WrapperPriceTextProduct>
        </WrapperPriceProduct>
        <WrapperAddressProduct>
          <span>Giao đến</span>
          <span className='address'> Q. 1, P. Bến Nghé, Hồ Chí Minh</span> -
          <span className='change-address'>Đổi địa chỉ</span>
        </WrapperAddressProduct>
        <div style={{ margin: "10px 0 20px", padding: "10px 0", borderTop: "1px solid #e5e5e5", borderBottom: "1px solid #e5e5e5" }}>
          <div style={{marginBottom: "10px"}}>Số lượng</div>
          <WrapperQualityProduct>
            <button style={{ border: "none", background: "transparent" }}>
              <MinusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>
            <WrapperInputNumber defaultValue={3} onChange={onChange} size='small' />
            <button style={{ border: "none", background: "transparent" }}>
              <PlusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>
          </WrapperQualityProduct>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <ButtonComponent
            bordered={false}
            size={40}
            styleButton={{
              background: 'rgb(255, 57, 69)',
              border: 'none',
              height: '48px',
              width: '220px',
              borderRadius: '4px'
            }}
            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
            textButton={'Chọn mua'}
          />
          <ButtonComponent
            bordered={false}
            size={40}
            styleButton={{
              background: '#fff',
              border: '1px solid rgb(13, 92, 182)',
              height: '48px',
              width: '220px',
              borderRadius: '4px'
            }}
            styleTextButton={{ color: 'rgb(13, 92, 182)', fontSize: '15px', fontWeight: '700' }}
            textButton={'Chọn mua'}
          />
        </div>
      </Col>
    </Row>
  )
}

export default ProductDetailsComponent