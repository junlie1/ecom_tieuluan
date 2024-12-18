import React, { Fragment } from 'react';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'; 
import CardComponent from '../../components/CardComponent/CardComponent';
import { Row, Col, Pagination } from 'antd';  
import { WrapperNavbar, WrapperProducts } from './style';

const TypeProductsPage = () => {
  const onChange = () => {

  }
  return (
    <div style = {{padding: '0 120px', background: '#efefef'}}>
      <Row style={{flexWrap:'nowrap', paddingTop: '10px' }}>
        <WrapperNavbar span={4}>
            <NavbarComponent />
        </WrapperNavbar>
        <Col span={20}>
          <WrapperProducts>
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
          </WrapperProducts>
          
      <Pagination showQuickJumper defaultCurrent={2} total={100} onChange={onChange} style={{textAlign: 'center', marginTop: '10px'}} />
        </Col>
      </Row>
    </div>
  )
}

export default TypeProductsPage;
