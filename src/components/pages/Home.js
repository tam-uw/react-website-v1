import React from 'react';
import '../../App.css';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import Grid from '../components/Grid'
import Card from 'react-bootstrap/Card'
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';

function Home() {
  return (
    <div className='home'>
      <h1>Hi, I'm Tameem</h1>
    </div>
  );
}

export default Home;
