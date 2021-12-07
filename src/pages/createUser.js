import React, {useState, useEffect} from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createInfo } from '../actions/userAction';
import { useNavigate } from 'react-router';

const CreateUser = () => {
    const [user, setUser] = useState(null)
    const dispatch = useDispatch()
    const data = useSelector((state) => state.userInfoReducer)
    const navigate = useNavigate();

    useEffect(() => {
        // console.log(user)
        // console.log(data)
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createInfo(user))
        navigate('/quiz')
    }


    return (
        <div className="userForm">
            <form
                
                onSubmit={handleSubmit}
            >
                <Grid
                    container
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-evenly"
                    alignItems="center"
                    style={{
                        height: "80vh"
                    }}
                >
                    <TextField
                        label="First Name"
                        variant="standard"
                        onChange={(e)=>setUser({...user, firstName: e.target.value})}
                    />
                    <TextField
                        label="Last Name"
                        variant="standard"
                        onChange={(e)=>setUser({...user, lastName: e.target.value})}
                    />
                    <TextField
                        type="email"
                        label="Email"
                        variant="standard"
                        onChange={(e)=>setUser({...user, email: e.target.value})}
                    />
                    <Button type="submit">Start</Button>
                </Grid>
            </form>

            {/* <p>{data.firstName}</p> */}
        </div>
    )
}

export default CreateUser;