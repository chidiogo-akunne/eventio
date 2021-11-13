import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import Navbar from "../../components/commons/navBar";
import Colors from "../../constants/colors";
import Card from "../../components/commons/card";
import Button from "../../components/commons/button";
import Input from "../../components/commons/input";
import { DatePicker, TimePicker } from "../../components/commons/datePicker";
import { createEvent } from "../../network/mutation";

import { Container } from "./styles";

export default function CreateEventPage() {
  const navigate = useNavigate();
  const [state, setState] = useState<{
    title: string;
    description: string;
    capacity: string;
  }>({
    title: "",
    description: "",
    capacity: "",
  });
  const [dateError, setDateError] = useState<string>("");
  const [timeError, setTimeError] = useState<string>("");
  const [titleError, setTitlerror] = useState<string>("");
  const [descriptionError, setDescriptionError] = useState<string>("");
  const [capacitydError, setCapacityError] = useState<string>("");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<Date>();

  //add date and time and convert to iso date string
  let isoDate = date?.toISOString().split("T")[0];
  let iosTime = time?.toISOString().split("T")[1];
  let startsAt = isoDate + "T" + iosTime;

  const { title, capacity, description } = state;

  //mutation to create an event
  const { isLoading, isError, error, mutate, isSuccess } = useMutation(() => {
    return createEvent({ title, description, capacity, startsAt });
  });

  const handleChange = (e: any) => {
    //get updates of input fields
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    //if any of the fields throws an error because of empty fields and the user updates the fields, reset error to empty strings
    if (title.length) {
      setTitlerror("");
    }
    if (description.length) {
      setDescriptionError("");
    }
    if (capacity.length) {
      setCapacityError("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //check if input fields are empty
    if (!title?.length) {
      return setTitlerror("has to be filled up");
    }
    if (!description?.length) {
      return setDescriptionError("has to be filled up");
    }
    if (!date) {
      return setDateError("has to be filled up");
    }
    if (!time) {
      return setTimeError("has to be filled up");
    }
    if (!capacity?.length) {
      return setCapacityError("has to be filled up");
    }
    //call mutation tocreate an event
    try {
      mutate();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    //navigate to home screen if creation to an event is successful
    if (isSuccess) {
      return navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <Container>
      <Navbar
        authenticated={true}
        create={true}
        style={{ backgroundColor: Colors.offWhite, position: "relative" }}
      />
      <Card cardClass="card">
        <h4>Create new event</h4>
        {isError ? (
          <p className="error">
            {
              //@ts-ignore
              error?.message
            }
          </p>
        ) : (
          <p>Enter details below.</p>
        )}
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Title"
            type="text"
            onChange={handleChange}
            value={title}
            name="title"
            errorIndicator={error ? true : false}
            error={titleError}
            required
          />
          <Input
            placeholder="Description"
            type="text"
            onChange={handleChange}
            value={description}
            name="description"
            errorIndicator={error ? true : false}
            error={descriptionError}
            required
          />
          <DatePicker
            value={date}
            onChange={setDate}
            errorIndicator={error ? true : false}
            error={dateError}
          />
          <TimePicker
            value={time}
            onChange={setTime}
            errorIndicator={error ? true : false}
            error={timeError}
          />
          <Input
            placeholder="Capacity"
            type="number"
            onChange={handleChange}
            value={capacity}
            name="capacity"
            errorIndicator={error ? true : false}
            error={capacitydError}
            required
          />
          <Button loading={isLoading} value="CREATE NEW EVENT" />
        </form>
      </Card>
    </Container>
  );
}
