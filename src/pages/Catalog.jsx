import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import SidebarLeft from '../components/SidebarLeft';
import CatalogItem from '../components/CatalogItem';

function Catalog({ items, categories }) {
  const [searchParams] = useSearchParams();
  const genderFilter = searchParams.get('filter');

  const [activeCategory, setActiveCategory] = useState(null);

  const filteredItems = useMemo(() => {
    let result = items;
    if (genderFilter) {
      result = result.filter((item) => item.gender === genderFilter);
    }
    if (activeCategory) {
      result = result.filter((item) => item.category === activeCategory);
    }
    return result;
  }, [items, genderFilter, activeCategory]);

  return (
    <section className="catalog">
      <aside className="sidebar catalog__sidebar">
        <SidebarLeft
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
      </aside>
      <ul className="catalog-list catalog__catalog-list">
        {filteredItems.map((obj) => (
          <CatalogItem key={obj.id} {...obj} />
        ))}
      </ul>
    </section>
  );
}

export default Catalog;
