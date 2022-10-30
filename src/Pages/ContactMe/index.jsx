import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { TextField, TextareaAutosize, Button, Box } from "@mui/material";
import useWindowSize from "hooks/useWindowSize";

import getStyles from "./style";

export const ContactMe = () => {
  const form = useRef();
  const { width } = useWindowSize();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_jgk9t9l",
      "template_8mm2mme",
      form.current,
      "MnEY47pYrVjCP2AFt"
    );
    window.location.reload();
  };

  const classes = getStyles(width);
  return (
    <form ref={form} onSubmit={sendEmail} style={classes.form}>
      <TextField
        name="full_name"
        required
        label="Full name"
        sx={classes.input}
      />
      <TextField
        type="email"
        name="email"
        required
        label="Email"
        sx={classes.input}
      />
      <TextField name="subject" required label="Subject" sx={classes.input} />
      <Box sx={classes.messageWrapper}>
        <label>Message</label>
        <TextareaAutosize name="message" style={classes.textArea} />
      </Box>
      <Button type="submit" value="Send" sx={classes.button} variant="outlined">
        Submit
      </Button>
    </form>
  );
};

export default ContactMe;
