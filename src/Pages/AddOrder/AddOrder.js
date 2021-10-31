import React from 'react';
import { useForm } from "react-hook-form";
import { Button, Form } from 'react-bootstrap';


const AddOrder = () => {

    const { register, handleSubmit , reset } = useForm();
    const onSubmit = data => {
        
            console.log(data);
            fetch("https://dark-fangs-46754.herokuapp.com/addProduct", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(data),
            })
              .then((res) => res.json())
              .then((result) => console.log(result));
    };

    return (

        <div>                 
            <h2>Add Order </h2>

                <form onSubmit={handleSubmit(onSubmit)}>

                <Form.Control placeholder='Name'  {...register("name", { required: true, maxLength: 20 })}/> <br />
                <Form.Control  type="Number"  {...register("price", { required: true })}
                    required  placeholder="Price" /> <br />
                <Form.Control  type="file"  {...register("file", { required: true })}
                    required  placeholder="Image upload" /> <br />
                <Form.Control  
                as="textarea"
                placeholder="Description" {...register("description")} 
                style={{ height: '150px' }}
                /> 
                <Button type="submit" > Add  Order </Button>
            
                </form> 


       </div>
    );
};

export default AddOrder;


/* 




const AddService = () => {
  
    return (
 
    );
};

export default AddService;


*/