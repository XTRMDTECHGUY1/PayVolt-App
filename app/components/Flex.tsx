"use client"
import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Image from 'next/image'
import styles from "../page.module.css";
import third from '../constant/Images/third.png'

export const Flex = () => {
  return (
    <section id='flex'>
<Container>
            <Row>

            <Col className={styles.secon}>

<br/><br/>
<p className={styles.di}> Full Featured <br/> Flexibility</p>
<p> Lorem ipsum dolor sit amet consectetur
 adipisicing elit. Iure, porro 
 accusamus nostrum vitae fugiat
  tenetur ea numquam ad facere 
  rerum iste explicabo laudantium
   optio quidem ex qui? Nesciunt, 
   natus quod.</p>

</Col>

                <Col className={styles.second}>

                <Image src={third} alt='' width={500} height={500}className={styles.thir} /> 
                </Col>

                



            </Row>
        </Container>
   </section>
  )
};