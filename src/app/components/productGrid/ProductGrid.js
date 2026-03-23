import Card from '@mui/material/Card';
import ArrowIcon from '../../assets/images/arrow.png'
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import './ProductGrid.module.css'
import Link from 'next/link';


export function ProductGrid({ products }) {

    return (
        <div className='product-container'>
            {products.map((product) => {
                return (
                    <Card key={product.id}
                        sx={{
                            maxWidth: 280,
                            marginBottom: 10, display: "flex", flexDirection: "column",
                            transition: "0.3s",
                            "&:hover": {
                                transform: "translateY(-6px)",
                                boxShadow: "0 12px 30px rgba(67,123,173,0.3)",
                            },
                        }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={product.image}
                            title="green iguana"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom
                                sx={{
                                    color: 'text.secondary',
                                    display: "-webkit-box",
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                    minHeight: 60
                                }}
                                variant="h5" component="div">
                                {product.title}
                            </Typography>
                            <Typography variant="body2"
                                sx={{
                                    color: 'text.secondary',
                                    display: "-webkit-box",
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                }}>
                                {product.description}
                            </Typography>
                            <Typography component="div"
                                sx={{
                                    marginTop: 2,
                                    marginBottom: 5,
                                }}>
                                <span className='product-rate'>{product.rating.rate}</span>
                                <Image src={`/images/ratings/rating-${Math.round(product.rating?.rate * 2) * 5}.png`} width={80} height={20} alt="rate" />
                                <span className="product-rate">{`(${product.rating?.count})`}</span>
                                <div className="product-price">₹{product.price}</div>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link href={`/product/${product.id}`}>
                                <Button size="small" sx={{ fontWeight: 'bold', fontSize: 15, marginLeft: 12 }}>View Details
                                    <Image src={ArrowIcon} className='arrow-icon' alt="arrow" />
                                </Button>
                            </Link>

                        </CardActions>
                    </Card>
                )
            })}

        </div>
    );
}