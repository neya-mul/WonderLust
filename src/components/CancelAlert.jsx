"use client";

import { AlertDialog, Button } from "@heroui/react";

export function CancelAlert({ booking , bookingId}) {
    console.log(bookingId);
    
    
    const cancelButton = async()=>{
            // console.log(booking._id);

          const res = await fetch(`http://localhost:5000/booking/${bookingId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        });
        const data = await res.json()
        // console.log(data);
        window.location.reload()
        

    }
    return (
        
        <AlertDialog>
            
            <Button variant="danger">Cancel</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Cancel Booking?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                Are you sure to delete your booking of <strong> {booking.destinationName}</strong> ?
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            {/* <Button slot="close" variant="tertiary">
                Cancel
              </Button> */}
                            <Button onClick={cancelButton} slot="close" variant="danger">
                                Cancel Booking
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}