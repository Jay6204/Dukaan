import { useNavigate } from 'react-router-dom';
import './Category.scss';
import cat1 from '../../../assets/category/cat-1.jpg';


const Category = ({ categories }) => {
    const navigate = useNavigate();

    return (
        <div className='shop-by-category'>
            <div className="categories">
                {categories?.map((item) => (
                    <div
                    key = {item.id}
                        className="category"
                        onClick={()=>navigate(`/category/${item.id}`)}
                    >
                    <img src={item.imgUrl} alt={item.title} />

                    </div>
                    
            ))}
            </div>
        </div>
    )
}

export default Category;