"use client";

import { authClient } from "@/lib/auth-client";
import { Check, ArrowRotateLeft } from "@gravity-ui/icons";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";

export default function SignUp() {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value
        const email = e.target.email.value
        const image = e.target.image.value
        const password = e.target.password.value





        const { data, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: image, // required
            image: password,
            callbackURL: "/",
        });

        console.log(data);
        if (error) {
            alert(error)
        }

        // API call here
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 flex items-center justify-center px-4">
            <Form
                onSubmit={handleSubmit}
                className="w-full max-w-md space-y-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-2xl"
            >
                {/* Heading */}
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-slate-800">
                        Create Account
                    </h1>
                    <p className="text-sm text-slate-500">
                        Fill in your information to sign up
                    </p>
                </div>

                {/* Name */}
                <TextField isRequired name="name" type="text">
                    <Label className="mb-1 text-sm font-medium text-slate-700">
                        Full Name
                    </Label>

                    <Input
                        placeholder="Enter your full name"
                        className="w-full"
                    />

                    <FieldError />
                </TextField>

                {/* Email */}
                <TextField isRequired name="email" type="email">
                    <Label className="mb-1 text-sm font-medium text-slate-700">
                        Email Address
                    </Label>

                    <Input
                        placeholder="Enter your email"
                        className="w-full"
                    />

                    <FieldError />
                </TextField>

                {/* Image URL */}
                <TextField isRequired name="image" type="url">
                    <Label className="mb-1 text-sm font-medium text-slate-700">
                        Profile Image URL
                    </Label>

                    <Input
                        placeholder="https://example.com/image.jpg"
                        className="w-full"
                    />

                    <FieldError />
                </TextField>

                {/* Password */}
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                >
                    <Label className="mb-1 text-sm font-medium text-slate-700">
                        Password
                    </Label>

                    <Input
                        placeholder="Enter your password"
                        className="w-full"
                    />

                    <Description className="text-xs text-slate-500">
                        Must contain at least 8 characters, 1 uppercase letter,
                        and 1 number.
                    </Description>

                    <FieldError />
                </TextField>

                {/* Buttons */}
                <div className="flex items-center gap-3 pt-2">
                    <Button
                        type="submit"
                        color="primary"
                        className="flex-1 font-semibold"
                    >
                        <Check />
                        Sign Up
                    </Button>

                    <Button
                        type="reset"
                        variant="bordered"
                        className="flex-1 font-semibold"
                    >
                        <ArrowRotateLeft />
                        Reset
                    </Button>
                </div>

                {/* Footer */}
                <p className="text-center text-sm text-slate-500 pt-2">
                    Already have an account?
                    <span className="ml-1 cursor-pointer font-semibold text-primary hover:underline">
                        Login
                    </span>
                </p>
            </Form>
        </div>
    );
}