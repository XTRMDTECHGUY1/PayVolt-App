'use client'
import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Image from 'next/image'
import fourth from '../constant/Images/fourth.png'
import styles from "../page.module.css";


export const Innovate = () => {
  return (
    <section id='innovate'>
<Container>
            <Row>

                <Col className={styles.second}>
                
                <Image src={fourth} alt='' width={360} height={500}className={styles.sec} /> 
                </Col>

                
                <Col className={styles.secon}>

                <br/><br/>
                <p className={styles.di}> Innovations that hit <br/> the Curve  </p>
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