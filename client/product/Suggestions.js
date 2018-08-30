import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import {Link} from 'react-router-dom'
import ViewIcon from 'material-ui-icons/Visibility'
import Icon from 'material-ui/Icon'
import Divider from 'material-ui/Divider'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import AddToCart from './../cart/AddToCart'

const styles = theme => ({

})

class Suggestions extends Component {
	render() {
		const {classes} = this.props
		return (<div>
			<Paper className={classes.root} elevation={4}>
				<Typography type="title" className={classes.title}>
					{this.props.title}
				</Typography>
				{this.props.products.map((item, i) => {
						return <span key={i}>
							<Card className={classes.card}>
								<CardMedia
									className={classes.cover}
									image={'/api/product/image/'+item._id}
									title={item.name}
								/>
								<div className={classes.details}>
									<CardContent className={classes.content}>
										<Link to={'/product/'+item._id}><Typography type="title" component="h3" className={classes.productTitle} color="primary">{item.name}</Typography></Link>
										<Link to={'/shops/'+item.shop._id}>
											<Typography type="subheading" className={classes.subheading}>
												<Icon className={classes.icon}>shopping_basket</Icon> {item.shop.name}
											</Typography>
										</Link>
										<Typography component="p" className={classes.date}>
												Added on {(new Date(item.created)).toDateString()}
										</Typography>
									</CardContent>
									<div className={classes.controls}>
										<Typography type="subheading" component="h3" className={classes.price} color="primary">$ {item.price}</Typography>
											<span className={classes.actions}>
												<Link to={'/product/'+item._id}>
													<IconButton color="secondary" dense="dense">
														<ViewIcon className={classes.iconButton}/>
													</IconButton>
												</Link>
												<AddToCart item={item}/>
											</span>
										</div>
									</div>
								</Card>
								<Divider/>
							</span>
						})
					}
			</Paper>
		</div>)
	}
}

Suggestions.propTypes = {
	classes: PropTypes.object.isRequired,
	products: PropTypes.array.isRequired,
	title: PropTypes.string.isRequired
}

export default withStyles(styles)(Suggestions)
