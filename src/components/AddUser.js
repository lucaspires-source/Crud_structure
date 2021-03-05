import React,{useContext,useState} from 'react'
import { Link,useHistory } from 'react-router-dom'
import {Form,FormGroup,Label,Input,Button } from 'reactstrap'
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
const AddUser = () => {
    const {addUser } = useContext(GlobalContext);
    const [name,setName] = useState('');
    const history = useHistory()
    const handleSubmit = () =>{
        const newUser ={
            id: uuid(),
            name:name
        }
        addUser(newUser)
        history.push('/')
    }

    const handleChange = (e) =>{
        setName(e.target.value)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" name="name" value={name} onChange={handleChange} placeholder="Enter Name"></Input>
            </FormGroup>
            <Button type="submit" >Submit</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}

export default AddUser
