"use client"
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "../page.module.css";
import Link from 'next/link'
import Button from 'react-bootstrap/Button'


export const Header = () => {

  return (
    <Navbar  className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"className={styles.logo}><b>Pay.</b></Navbar.Brand>
          <Nav className={styles.navbar}>
            <Link href='/'className={styles.nav}>Payment</Link>
            <Link href='#flex'className={styles.nav}>Progess</Link>
            <Link href='#innovate'className={styles.nav}>Done</Link>
            </Nav>
          <div className={styles.log}>
          <Link href='#home' className={styles.na}>Login</Link>
          <Button variant='primary' className={styles.but}>Connect </Button>
          </div>
      
      </Container>
    </Navbar>
  )
};