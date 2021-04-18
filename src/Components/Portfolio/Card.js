import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: "1.2em",
    },
    pos: {
        marginBottom: 12,
    },
})

export default ({ ...props }) => {
    const classes = useStyles()
    console.log(props)
    return (
        <Card className={classes.root}>
            <CardContent>
                {/* {props} */}
                <Typography className={classes.title} color="textSecondary">
                    {props?.title}
                </Typography>
                {/* <Typography variant="h5" component="h2">
                    be{bull}nev{bull}o{bull}lent
                </Typography> */}
                {props?.tags.map((tag, index) =>
                    <Chip key={index} variant="outlined" color="primary">{tag}</Chip>                    
                )}

                <Typography variant="body2" component="p">
                    {props?.description}
                </Typography>
            </CardContent>
            <CardActions>
            {props.post && <Button size="small">Details</Button>}
            {props.github && <Button size="small">Github</Button>}
            {props.web && <Button size="small">Web</Button>}
            </CardActions>
        </Card>
    )
}