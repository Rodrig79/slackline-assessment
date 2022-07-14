import styles from "styles/product-stats/ProductStats.module.scss";

interface Props {
  productID: string;
}

const ProductStats: React.FC<Props> = ({ productID }) => {
    


  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <label>Sidebar</label>
      </div>
      <div className={styles.body}>
        <div className={styles.body_graph}>
          <label>Graph</label>
        </div>

        <div className={styles.body_table}>
        <label>Table</label>
        </div>
      </div>
    </div>
  );
};

export default ProductStats;
