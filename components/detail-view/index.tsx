import React from 'react';
import styles from '../../pages/ezbets68/common.module.css';
import { Row, Col } from 'react-bootstrap';

interface DetailViewProps {
  data: Array<any>;
}
const DetailView: React.FC<DetailViewProps> = ({ data }) => {
  return (
    <>
      {data.length &&
        data.map((d, i) => (
          <Row key={i} className={` ${styles.bgOdd} ${styles.rounded2} shadow-sm my-2 py-2`}>
            <Col className="col-1"></Col>
            <Col className="col-8">{d.label}</Col>
            <Col className="col-3">
              <label className="text-end">{d.value}</label>
            </Col>
          </Row>
        ))}
    </>
  );
};
export default DetailView;
