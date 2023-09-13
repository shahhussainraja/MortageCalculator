import { Button, Grid } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"

export default function LandingPage() {
    const navigate = useNavigate()
    return (
        <Grid container className='startup-bg'>
            <Grid item lg={12} xl={12} sx={{
                paddingTop: 20,
                paddingLeft: 10
            }}>
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{duration : 1 , delay : 0.5}}
                >
                    <p className='font-extrabold text-5xl text-white'>Borrowing power calculator</p>
                    <p className='font-bold text-3xl text-white'>How much can I borrow?</p>
                    <p className='text-xl text-white w-[50%] opacity-90'>
                        This calculator estimates your borrowing power based on your income, financial commitments and loan details entered. This can be used in conjunction with our loan repayment calculator to help you to work out your repayments based on the amount you wish to borrow.
                    </p>
                </ motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{duration : 0.4 , delay : 0.6}}
                >
                <Button sx={{
                    marginTop: 2,
                    backgroundColor: "#006875",
                    color: "white",
                    paddingX: 2,
                    paddingY: 1,
                }}
                    onClick={() => navigate("/borrowCapacity")}
                >Get started</Button>
                </ motion.div>
            </Grid>
        </Grid>
    )
}
