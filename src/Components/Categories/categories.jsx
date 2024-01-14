import "./categories.CSS";
import { categories } from "../../fake";

export const Categories = () => {
  return (
    <div>
      <div className="categories">
        <ul>
          {categories.map((el, i) => (
            <li key={i}>
              <div className="category-item">
                <h1>{el.name}</h1>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
