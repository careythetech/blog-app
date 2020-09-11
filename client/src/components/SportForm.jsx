import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SportForm = (props) => {

    const [sportData, setSportData] = useState({
        title: '',
        authorname: '',
        description: '',
        date: ''
    });
    const [editData, setEditData] = useState({})

    const handleChange = e => {
        setSportData({ ...sportData, [e.target.name]: e.target.value })
    };

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:3002/api/sport/add', sportData)
            .then(res => window.location = '/sportsList')
            .catch(error => console.log(error))
    };

    const handleEdit = (id, e) => {
        e.preventDefault()
        axios.put(`http://localhost:3002/api/sport/${id}`, sportData)
            .then(res => window.location = '/sportsList')
            .catch(error => console.log(error))
        console.log(e)
        console.log(id)
    };



    useEffect(() => {
        if (props.location.aboutProps) {
            //const {authorname, title} = props.location.aboutProps
            setEditData(props.location.aboutProps)
        }
    }, []);

    return (
        <div>
            {props.location.aboutProps ? <h1
                style={{ textAlign: 'center' }} >
                Edit sport</h1> :
                <h1 style={{ textAlign: 'center' }}>
                    Add Sport</h1>}
            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around'
                }}>
                <input defaultValue={editData.title} onChange={handleChange} type="text" name="title" placeholder="enter title" />
                <input defaultValue={editData.description} onChange={handleChange} type="text" name="description" placeholder="enter description" />
                <input defaultValue={editData.authorname} onChange={handleChange} type="text" name="authorname" placeholder="enter authorName" />
                <input onChange={handleChange} type="date" name="date" placeholder="enter date" />
                {props.location.aboutProps ? <input type="submit" value="edit" onClick={(e) => handleEdit(editData.id, e)} /> : <input type="submit" value="submit" onClick={handleSubmit} />}
            </form>
        </div>
    );
};

export default SportForm;
