import React, { createContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

// export const PostContext = createContext({});


const Post = ({ post }) => {
    const classes = useStyles();
    const { id, title, body } = post;
    return (
        // <PostContext.Provider value={post}>
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {title}

                </Typography>

                <Typography className={classes.pos} color="textSecondary">
                    {body}
                </Typography>

            </CardContent>
            <CardActions>
                {/* <Link to={"/post/" + id}> */}

                <Link to={{pathname:"/post/" + id }}>
                    <Button>Learn More</Button>
                </Link>
             


            </CardActions>
        </Card>
        // </PostContext.Provider>
    );
};


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default Post;