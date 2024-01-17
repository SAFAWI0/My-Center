import "./categories.css";
import { cate } from "../../fake";

export const Categories = () => {
  return (
    <div>
      <div className="categories">
        <ul>
          {cate.map((el, i) => (
            <li key={i}>
              <div className="category-item">
                <img src={el.image} />
                <h1>{el.name}</h1>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
