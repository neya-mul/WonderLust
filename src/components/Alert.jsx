"use client";

import { Delete } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

export function Alert({ destination }) {
    const { _id, destinationName, country, category, price, duration, departureDate, imageUrl, description } = destination
    const deletteButton = async () => {
        const res = await fetch(`http://localhost:5000/destination/${_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        });
        const data = await res.json()
        // console.log(data);

    }
    return (
        <AlertDialog>
            <Button variant="danger" className='flex items-center rounded-xl my-5'>
                <MdDelete />
                Delete</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete project Destination?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{destinationName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={deletteButton} slot="close" variant="danger">
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}