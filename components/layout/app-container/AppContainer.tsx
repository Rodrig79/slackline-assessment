import styles from 'styles/layout/app-container/AppContainer.module.scss'
import AppHeader from '../app-header/AppHeader';

interface Props{
  children: React.ReactNode
}

const AppContainer: React.FC<Props> = ({children}) => {

  return(
    <div className={styles.container} >
      <AppHeader/>

      <div className={styles.page_content}>
        {children}
      </div>

    </div>
  )
};

export default AppContainer;
