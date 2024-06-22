'use client'
import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Image from 'next/image'
import second from '../constant/Images/second.png'
import styles from "../page.module.css";
import frames from '../constant/Images/frame.png'


export const Customer = () => {
  return (
   <section>
<Container>
            <Row>

                <Col className={styles.second}>
                <p> ---</p>
                <p className={styles.di}> Digital Wallet <br/> benefit</p>

                <Image src={second} alt='' width={360} height={500}className={styles.sec} /> 
                </Col>

                
                <Col className={styles.secon}>

                <Image src={frames} alt='' width={500} height={300} className={styles.imag}/> 
                <br/><br/>
                <p className={styles.di}> Inspire Customer <br/> Loyalty</p>
                <p> Lorem ipsum dolor sit amet consectetur
                 adipisicing elit.<br/>Iure, porro 
                 accusamus nostrum vitae fugiat
                  tenetur ea <br/>numquam ad facere 
                  rerum iste explicabo laudantium<br/>
                   optio quidem ex qui? Nesciunt, 
                   natus quod.</p>
                
                </Col>



            </Row>
        </Container>
   </section>
  )
};