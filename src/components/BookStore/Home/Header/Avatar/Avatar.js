import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    background: "#ED7C81",
    float: " right"
  }
});

export default function LetterAvatars() {
  const classes = useStyles();

  return <Avatar className={classes.avatar}>T</Avatar>;
}
