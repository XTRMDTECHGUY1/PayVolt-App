'use client'
import React from 'react'
import { Container,Row, Col} from 'react-bootstrap';
import styles from "../page.module.css";
import Image from 'next/image'
import front from '../constant/Images/front.png'

export const Content = () => {
  return (
    <Container>
        <Row>
            <Col className={styles.page}>
            
            <p> Products --- </p>
            <br/>
            <h1 className={styles.dig}> Digital<br/> Wallet </h1>
            <br/>
            <p> Lorem ipsum dolor sit amet consectetur
                 adipisicing elit.<br/>Iure, porro 
                 accusamus nostrum vitae fugiat
                  tenetur ea <br/>numquam ad facere 
                  rerum iste explicabo laudantium<br/>
                   optio quidem ex qui? Nesciunt, 
                   natus quod.</p>
            </Col>

            <Col className={styles.img}>
            
          <Image src={front} alt=''  width={420} height={550}/>
            </Col>
        </Row>
    </Container>
  )
};