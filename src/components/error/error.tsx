import { useRouteError } from "react-router-dom";
import styles from './error.module.scss'; // Import your styles

export default function ErrorPage() {
  const error: any = useRouteError(); // Add type 'any' for better error handling
  console.error(error);

  return (
    <div id="error-page" className={styles.errorPage}>
      
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}
