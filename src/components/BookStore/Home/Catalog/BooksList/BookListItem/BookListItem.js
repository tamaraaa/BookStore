import React from "react";
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
    backgroundColor: "#ed7c81"
  }
}));

const RecipeReviewCard = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [expandedDescription, setExpandedDescription] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
    setExpandedDescription(false);
  }
  const handleExpandDescription = () => {
    setExpandedDescription(!expandedDescription);
    setExpanded(false);
  };
  return (
    <Card className={classes.card}>
      <CardHeader>
        <Typography paragraph>jfnweaiojm</Typography>
      </CardHeader>
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
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
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
        <TextField
          id="filled-textarea"
          label="Whrite a comment here"
          placeholder="Whrite a comment here"
          className={classes.textField}
          margin="normal"
          variant="filled"
          width="auto"
        />
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
