"use client";

import { authClient } from "@/lib/auth-client";
import { ArrowRotateLeft, Check } from "@gravity-ui/icons"
import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react"
import { router } from "better-auth/api";
import Link from "next/link";
import React from 'react'

export default function Login() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value
        const password = e.target.password.value




        const { data, error } = await authClient.signIn.email({

            email: email, // required
            password: password, // required
            callbackURL: "/",
        });

        if (error) {
            alert(error.message)
        }
        else{
            alert('Login success')
            router.push('/')
        }

    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 flex items-center justify-center px-4">
            <Form
                onSubmit={handleSubmit}
                className="w-full max-w-md space-y-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-2xl"
            >
                {/* Heading */}
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-slate-800">
                        Welcome Back
                    </h1>

                    <p className="text-sm text-slate-500">
                        Login to your account
                    </p>
                </div>

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
                        Login
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
                    Don&apos;t have an account?
                    <Link href='/signUp' className="ml-1 text-blue-400 cursor-pointer font-semibold text-primary hover:underline">
                        Sign Up
                    </Link>
                </p>
            </Form>
        </div>
    )
}
