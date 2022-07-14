import Image from "next/image";
import styles from "styles/layout/app-header/AppHeader.module.scss";
import logoSvg from "public/stackline_logo.svg";

interface Props {}

const AppHeader: React.FC<Props> = ({}) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Image 
        src={logoSvg} 
        alt="Stackline logo" 
        />
      </div>
    </div>
  );
};

export default AppHeader;
