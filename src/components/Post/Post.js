import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'


const Post = ({ post, commentButton }) => {
    const classes = useStyles();
    const { id, title, body } = post;
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                    {title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {body}
                </Typography>

            </CardContent>
            <CardActions>
                {
                    commentButton &&
                    <Link className={classes.urlLink} to={{ pathname: "/post/" + id }}>
                        <Button>See More</Button>
                    </Link>
                }
            </CardActions>
        </Card>
    );
};

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginBottom: "20px",
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
    },
    pos: {
        marginBottom: 12,
    },
    urlLink: {
        backgroundColor: 'lightblue',
        textDecoration: 'none',
        border: '1px solid #ccc',
    },
});

export default Post;