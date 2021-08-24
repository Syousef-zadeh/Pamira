import { style } from '@material-ui/system';
import React from 'react'
import Button from '../UI/Button/button'
import styles from './MBI.module.css';

const MBI =(props)=>{
    return(
        <div className={styles.mbiBtn}>
            <Button style={{padding: '1rem 5rem', backgroundColor: '#283b42', color:'white'}}>Calculate Your MBI</Button>
        </div>
    )
}
export default MBI;