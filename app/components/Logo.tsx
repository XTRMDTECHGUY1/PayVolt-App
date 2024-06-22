"use client"
import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Image from 'next/image'
import Logo1 from '../constant/Images/logo1.svg'
import Logo2 from '../constant/Images/logo2.svg'
import Logo3 from '../constant/Images/logo3.svg'
import Logo4 from '../constant/Images/logo4.svg'
import Logo5 from '../constant/Images/logo5.svg'
import styles from "../page.module.css";


export const Logo = () => {
  return (
    <section className={styles.lg}>
        <Container>
            <Row>

                <Col>
                <Image src={Logo1} alt='' width={150} height={15}/>
                </Col>

                <Col>
                <Image src={Logo2} alt='' width={150} height={20}/>
                </Col>

                <Col>
                <Image src={Logo3} alt='' width={150} height={20}/>
                </Col>

                <Col>
                <Image src={Logo4} alt='' width={150} height={20}/>
                </Col>

                <Col>
                <Image src={Logo5} alt='' width={150} height={20}/>
                </Col>





            </Row>
        </Container>
    </section>
  )
}

export default Logo
