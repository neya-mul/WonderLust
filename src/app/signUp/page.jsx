"use client";

import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";

export default function SignUp() {

    //   const onSubmit = (e) => {
    //     e.preventDefault();


    //   };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <Form className="flex w-96 flex-col gap-4 border p-10" >
                <h1>Please SignUp</h1>



                <TextField
                    isRequired
                    name="name"
                    type="text"

                >
                    <Label>Name</Label>
                    <Input placeholder="Enter Your Name" />
                    <FieldError />
                </TextField>




                <TextField
                    isRequired
                    name="email"
                    type="email"

                >
                    <Label>Email</Label>
                    <Input placeholder="Enter Your Email Address" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    name="image"
                    type="url"

                >
                    <Label>Image URL</Label>
                    <Input placeholder="Enter Your Image URl" />
                    <FieldError />
                </TextField>




                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"

                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>

                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
        </div>
    );
}