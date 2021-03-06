import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Comment from "@material-ui/icons/Comment";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";
import CardHeader from "@material-ui/core/CardHeader";
import "./book_list_item.scss";
import { COMMENT } from "../../../../../../Context/BooksContext/BooksReducer";

const useStyles = makeStyles(theme => ({
  card: {
    width: 345,
    margin: 50
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "90%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    maxWidth: "100%"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  typography: {
    border: "1px solid gray",
    borderRadius: "5px;",
    padding: "15px",
    display: "flex",
    alignContent: "center",
    height: "auto"
  },
  red: {
    backgroundColor: "#ed7c81",
    fontSize: "10px"
  }
}));

const RecipeReviewCard = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [expandedDescription, setExpandedDescription] = React.useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (id, event, text) => {
    event.preventDefault();
    props.dispatch({ type: COMMENT, payload: { id, text } });
    setInputValue("");
  };
  const handleInputChange = event => {
    setInputValue(event.target.value);
  };
  const handleExpandClick = event => {
    console.log(event.target);
    setExpanded(!expanded);
    setExpandedDescription(false);
    console.log(event.keyCode);
  };
  const handleExpandDescription = () => {
    setExpandedDescription(!expandedDescription);
    setExpanded(false);
  };
  console.log(props.data.comments);
  return (
    <Card className={classes.card}>
      <CardHeader title={props.data.title} />
      <CardMedia
        className={classes.media}
        image={props.data.img}
        title="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton
          className={props.data.liked ? classes.red : ""}
          aria-label="Add to favorites"
          onClick={props.handelLike}
        >
          <FavoriteIcon />
          {props.data.liked !== 0 && props.data.liked}
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={event => handleExpandClick(event)}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <Comment />
        </IconButton>
        <IconButton onClick={handleExpandDescription}>
          <p className="aboutBook">About</p>
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <form onSubmit={event => handleSubmit(props.id, event, inputValue)}>
          <TextField
            onChange={handleInputChange}
            id="filled-textarea"
            label="Whrite a comment here"
            placeholder="Whrite a comment here"
            className={classes.textField}
            margin="normal"
            variant="filled"
            width="auto"
            value={inputValue}
          />
        </form>
      </Collapse>
      <Collapse in={expandedDescription} timeout="auto" unmountOnExit>
        <Typography>{props.data.description}</Typography>
      </Collapse>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {props.data.comments.map((comment, index) => {
          return (
            <CardContent key={index}>
              <Typography className={classes.typography} variant="body2">
                <Avatar>d</Avatar>
                {comment}
              </Typography>
            </CardContent>
          );
        })}
      </Collapse>
    </Card>
  );
};
export default RecipeReviewCard;
