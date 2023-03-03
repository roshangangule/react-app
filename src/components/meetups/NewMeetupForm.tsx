import React, { useRef } from "react";
import { Card } from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

export const NewMeetupForm = (props: any) => {

    const titleInputRef =useRef<HTMLInputElement | null>(null);
    const imageInputRef = useRef<HTMLInputElement | null>(null);
    const addressInputRef = useRef<HTMLInputElement | null>(null);
    const descriptionInputRef = useRef<HTMLTextAreaElement | null>(null);

    const submitHandler = (event: any) => {
        event.preventDefault();

        const enteredTitle = titleInputRef.current?.value;
        const enteredImageUrl = imageInputRef.current?.value;
        const enteredAddress = addressInputRef.current?.value;
        const enteredDescription = descriptionInputRef.current?.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImageUrl,
            address: enteredAddress,
            description: enteredDescription
        }
        console.log(meetupData);

        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
            <form action="" className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" id="title" required ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" id="image" required ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" required ref={addressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" rows={5} required ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>

    );
}